import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeCodeForToken } from "../spotify";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      exchangeCodeForToken(code)
        .then(() => {
          navigate("/"); // or dashboard page
        })
        .catch((err) => {
          console.error("Token exchange failed:", err);
          alert("Spotify authentication failed.");
          navigate("/");
        });
    } else {
      console.error("No code found in callback URL.");
      navigate("/");
    }
  }, [navigate]);

  return <p>Authenticating with Spotify… please wait.</p>;
}
