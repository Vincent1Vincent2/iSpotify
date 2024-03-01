# iSpotify

Welcome to my dream Spotify player, a virtual iPod UI with Spotify integrated!

Right now it's a work in progress but the core setup is done to continue allow further development.

## Current Features

- Oath2
- User playlists and playlist tracks
- Limited Playback (not 100% stable)

## Features In The Works

- Stable Playback
- Auto play next track in playlist

## Features To Be Started

- Navigation Menu
- Search tracks
- Play Searched Tracks
- Create Playlists
- Play Podcasts

## Want to use?

1 :
Create a Spotify App and get your CLIENT_ID, CLIENT_SECRET.

2 :
Choose to use Web API Web, Playback SDK

3 :
Create .env and add > \*.env .env < to .gitignore
Add CLIENT_ID, CLIENT_SECRET in .env

TEMPLETE FOR .env :
VITE_SPOTIFY_CLIENT_ID=CLIENT_ID
VITE_SPOTIFY_CLIENT_SECRET=CLIENT_SECRET

4 :
Make sure the vite.config.ts has

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
server: {
port: 3000,
strictPort: true,
host: true,
},
});

5 :

npm i
npm run dev
