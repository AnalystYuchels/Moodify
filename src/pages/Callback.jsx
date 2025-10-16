import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeCodeForToken } from "../spotify";

export default function Callback() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Processing Spotify sign-in...");

  useEffect(() => {
    async function handle() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const error = params.get("error");
      if (error) {
        setMessage("Spotify auth error: " + error);
        return;
      }
      if (!code) {
        setMessage("No code found in callback.");
        return;
      }
      try {
        await exchangeCodeForToken(code);
        setMessage("Success! Redirecting to dashboard...");
        setTimeout(() => navigate("/dashboard"), 800);
      } catch (err) {
        setMessage("Token exchange failed: " + err.message);
        console.error(err);
      }
    }
    handle();
  }, [navigate]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <p>{message}</p>
    </div>
  );
}
