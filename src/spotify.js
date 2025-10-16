const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI || "https://steamy-cashed-luba.ngrok-free.dev/callback";
const SCOPES = import.meta.env.VITE_SPOTIFY_SCOPES || "user-read-private user-read-email user-top-read playlist-read-private";

function base64UrlEncode(buffer) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return hash;
}

function generateRandomString(length = 128) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let result = "";
  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);
  for (let i = 0; i < length; i++) {
    result += charset[randomValues[i] % charset.length];
  }
  return result;
}

export async function initiateAuth() {
  const code_verifier = generateRandomString(96);
  sessionStorage.setItem("pkce_code_verifier", code_verifier);

  const hashed = await sha256(code_verifier);
  const code_challenge = base64UrlEncode(hashed);

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    code_challenge_method: "S256",
    code_challenge,
    scope: SCOPES,
  });

  const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

  console.log("Redirecting to Spotify auth...");
  console.log("CLIENT_ID:", CLIENT_ID);
  console.log("Redirect URI:", REDIRECT_URI);
  window.location.href = authUrl;
}

export async function exchangeCodeForToken(code) {
  const code_verifier = sessionStorage.getItem("pkce_code_verifier");
  if (!code_verifier) throw new Error("Missing PKCE code verifier.");

  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
    code_verifier,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Token exchange failed: " + err);
  }

  const data = await res.json();
  const now = Date.now();

  localStorage.setItem("spotify_access_token", data.access_token);
  localStorage.setItem("spotify_refresh_token", data.refresh_token || "");
  localStorage.setItem("spotify_token_expires_at", (now + data.expires_in * 1000).toString());

  return data;
}

export function getStoredAccessToken() {
  const token = localStorage.getItem("spotify_access_token");
  const expiresAt = localStorage.getItem("spotify_token_expires_at");
  if (!token || !expiresAt) return null;
  if (Date.now() > parseInt(expiresAt, 10)) return null;
  return token;
}

export async function refreshAccessToken() {
  const refresh_token = localStorage.getItem("spotify_refresh_token");
  if (!refresh_token) return null;

  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: "refresh_token",
    refresh_token,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!res.ok) {
    console.warn("Token refresh failed");
    return null;
  }

  const data = await res.json();
  const now = Date.now();

  if (data.access_token) {
    localStorage.setItem("spotify_access_token", data.access_token);
    localStorage.setItem("spotify_token_expires_at", (now + data.expires_in * 1000).toString());
  }

  if (data.refresh_token) {
    localStorage.setItem("spotify_refresh_token", data.refresh_token);
  }

  return data.access_token;
}

export async function ensureValidToken() {
  let token = getStoredAccessToken();
  if (token) return token;
  token = await refreshAccessToken();
  return token;
}

export async function getRecommendationsByMood(moodKey) {
  const token = await ensureValidToken();
  if (!token) throw new Error("Not authenticated with Spotify.");

  const moodToGenres = {
    happy: "pop",
    chill: "lofi",
    neutral: "acoustic",
    sad: "piano",
    angry: "rock",
  };

  const seed_genres = moodToGenres[moodKey] || "pop";
  const url = `https://api.spotify.com/v1/recommendations?seed_genres=${encodeURIComponent(seed_genres)}&limit=10`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Failed to fetch Spotify recommendations.");
  return res.json();
}

export async function searchPlaylists(query) {
  const token = await ensureValidToken();
  if (!token) throw new Error("Not authenticated with Spotify.");

  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=playlist&limit=5`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw new Error("Spotify playlist search failed.");
  return res.json();
}
