# 🎶 Moodify – Mood-to-Playlist Journal

Moodify is a casual web app that helps you **log your mood** and instantly generates a **Spotify playlist** to match your vibe. Over time, it builds a **mood history** and shows trends so you can discover your personal soundtrack.


## ✨ Features

* 🌈 **Mood Logging** – Pick your mood with emojis + jot a quick note
* 🎧 **Playlist Generator** – Auto-generates Spotify playlists based on mood
* 📈 **Mood Trends** – Visualize your emotional journey over time
* 📱 **Responsive Design** – Works seamlessly on desktop + mobile

## 🛠️ Tech Stack

* **Frontend**: React (Vite)
* **Styling**: Tailwind CSS
* **Charts**: Recharts
* **API**: Spotify Web API
* **Deployment**: Netlify / Vercel


## 📂 Project Structure

```
src/
 ├── components/   # UI building blocks (Button, Card, MoodPicker)
 ├── pages/        # Landing, Dashboard, Trends
 ├── styles/       # Global styles, Tailwind config
 ├── App.jsx       # Routes + layout
 └── main.jsx      # Entry point
```


## ⚙️ Dependencies

```json
"dependencies": {
  "react": "^18",
  "react-dom": "^18",
  "tailwindcss": "^3",
  "recharts": "^2"
}
```


## 🚀 Getting Started

1. Clone the repo

   ```bash
   git clone https://github.com/YOUR_USERNAME/moodify.git
   cd moodify
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Run dev server

   ```bash
   npm run dev
   ```
4. Visit `http://localhost:5173`


## 🖼️ Style Guide

See [STYLEGUIDE.md](./STYLEGUIDE.md) for colors, typography, and spacing rules.


## 📌 Roadmap

* [ ] Landing page design
* [ ] Mood picker component
* [ ] Spotify playlist integration
* [ ] Mood trends dashboard
* [ ] Deployment (Netlify/Vercel)
