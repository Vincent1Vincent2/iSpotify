# iSpotify

Welcome to my dream Spotify player, a virtual iPod UI with Spotify integrated!

Right now it's a work in progress but the core setup is done to continue allow further development.

## Quick demo

https://github.com/Vincent1Vincent2/iSpotify/assets/143703781/ecdcbdab-15b5-48f0-89ac-918d5daeb1ab
### In the video you firsr se me sign out, this clears all auth and resets browser/app. Sign in initializes auth and stores values in localStorage, if auth is confirmed im allowed to render the IpodBody, display, header, playlist. Playlist fetch the logged in users (me) and disolays them. Clicking select playlist allows playlisttracks to load, the app fetch the selected playlisttrack and displays them. Once a user clicks on a track album img it saves uri to localStorage, then i get that and use it in the Playback component. I convert into a vaild uri and request a access token. I check if values are valid and then use uri to play the selected track.


## Current Features

- Oath2
- User playlists and playlist tracks
- Limited Playback (not 100% stable)

### Features In The Works
- Stable Playback
- Auto play next track in playlist

### Features To Be Started

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
