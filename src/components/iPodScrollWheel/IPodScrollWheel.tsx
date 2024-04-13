import { usePlayback } from "@/Providers/PlaybackProvider";
import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import Link from "next/link";

export default function IPodScrollWheel() {
  const { deviceId } = usePlayback();
  const { tracks } = usePlaylist();
  const { handleTrackClick } = usePlayer();

  async function backOneTrack() {
    await sdk.player.skipToPrevious(deviceId);
  }

  async function skipTrack() {
    await sdk.player.skipToNext(deviceId);
  }

  function playPause() {
    tracks.items.map((track) => handleTrackClick(track));
  }

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="ScrollWheel">
        <g id="TouchRing">
          <circle
            id="Outer"
            cx="100"
            cy="100"
            r="100"
            fill="url(#paint0_linear_12_15)"
          />
        </g>
        <g id="SelectButton">
          <circle
            id="Inner"
            cx="100.5"
            cy="99.5"
            r="37.5"
            fill="url(#paint1_radial_12_15)"
          />
        </g>
        <g cursor="pointer" onClick={() => backOneTrack} id="BackButton">
          <rect
            id="BackBox"
            x="2"
            y="82"
            width="30"
            height="35"
            fill="#D9D9D9"
            fillOpacity="0.01"
          />
          <path
            id="Back"
            d="M16.646 94.0986C16.9755 93.8551 17.4418 94.0904 17.4418 94.5001V98.6953C17.4418 98.7772 17.5351 98.8243 17.601 98.7756L23.931 94.0986C24.2605 93.8551 24.7269 94.0904 24.7269 94.5001V105.5C24.7269 105.91 24.2605 106.145 23.931 105.901L17.601 101.224C17.5351 101.175 17.4418 101.222 17.4418 101.304L17.4418 105.5C17.4418 105.91 16.9755 106.145 16.646 105.901L9.20253 100.401C8.93248 100.202 8.93249 99.7978 9.20254 99.5983L16.646 94.0986Z"
            fill="#F5F5F5"
          />
        </g>
        <g cursor="pointer" onClick={() => skipTrack} id="SkipButton">
          <rect
            id="SkipBox"
            x="169"
            y="82"
            width="30"
            height="35"
            fill="#D9D9D9"
            fillOpacity="0.01"
          />
          <path
            id="skip"
            d="M184.081 94.0986C183.751 93.8551 183.285 94.0904 183.285 94.5001L183.285 98.6953C183.285 98.7772 183.192 98.8243 183.126 98.7756L176.796 94.0986C176.466 93.8551 176 94.0904 176 94.5001V105.5C176 105.91 176.466 106.145 176.796 105.901L183.126 101.224C183.192 101.175 183.285 101.222 183.285 101.304L183.285 105.5C183.285 105.91 183.751 106.145 184.081 105.901L191.524 100.401C191.794 100.202 191.794 99.7978 191.524 99.5983L184.081 94.0986Z"
            fill="#F5F5F5"
          />
        </g>
        <g onClick={() => playPause} cursor="pointer" id="PlayPauseButton">
          <rect
            id="PlayPauseBox"
            x="83"
            y="161"
            width="35"
            height="35"
            fill="#D9D9D9"
            fillOpacity="0.01"
          />
          <g id="PlayPause">
            <g id="shape">
              <path
                d="M101.429 173C101.192 173 101 173.192 101 173.429V184.571C101 184.808 101.192 185 101.429 185H104C104.237 185 104.429 184.808 104.429 184.571V173.429C104.429 173.192 104.237 173 104 173H101.429Z"
                fill="#F5F5F5"
              />
              <path
                d="M108.286 173C108.049 173 107.857 173.192 107.857 173.429V184.571C107.857 184.808 108.049 185 108.286 185H110.857C111.094 185 111.286 184.808 111.286 184.571V173.429C111.286 173.192 111.094 173 110.857 173H108.286Z"
                fill="#F5F5F5"
              />
            </g>
            <path
              id="shape_2"
              d="M89 173.4C89 173.072 89.3732 172.884 89.6369 173.079L97.2155 178.678C97.4316 178.838 97.4316 179.161 97.2155 179.321L89.6369 184.921C89.3732 185.116 89 184.928 89 184.6L89 173.4Z"
              fill="#F5F5F5"
            />
          </g>
        </g>
        <Link href={"/"}>
          <g id="MenuButton">
            <rect
              id="MenuBox"
              x="75"
              y="10"
              width="50"
              height="30"
              fill="#D9D9D9"
              fillOpacity="0.01"
            />
            <path
              id="MENU"
              d="M83.644 20.7578H85.1548L87.6812 27.7148L90.2012 20.7578H91.7183L88.2842 30H87.0718L83.644 20.7578ZM82.8823 20.7578H84.3613L84.6279 27.1499V30H82.8823V20.7578ZM90.9946 20.7578H92.48V30H90.7344V27.1499L90.9946 20.7578ZM100.383 28.6289V30H95.4697V28.6289H100.383ZM96.0029 20.7578V30H94.2573V20.7578H96.0029ZM99.7417 24.5728V25.9121H95.4697V24.5728H99.7417ZM100.364 20.7578V22.1353H95.4697V20.7578H100.364ZM109.022 20.7578V30H107.27L103.341 23.5889V30H101.595V20.7578H103.341L107.283 27.1753V20.7578H109.022ZM115.941 20.7578H117.687V26.896C117.687 27.6027 117.534 28.1973 117.229 28.6797C116.925 29.1579 116.51 29.5197 115.985 29.7651C115.461 30.0063 114.864 30.127 114.195 30.127C113.518 30.127 112.915 30.0063 112.386 29.7651C111.857 29.5197 111.443 29.1579 111.142 28.6797C110.842 28.1973 110.691 27.6027 110.691 26.896V20.7578H112.437V26.896C112.437 27.3276 112.509 27.681 112.653 27.9561C112.797 28.2269 113 28.4279 113.262 28.5591C113.525 28.6903 113.836 28.7559 114.195 28.7559C114.559 28.7559 114.87 28.6903 115.128 28.5591C115.391 28.4279 115.592 28.2269 115.731 27.9561C115.871 27.681 115.941 27.3276 115.941 26.896V20.7578Z"
              fill="white"
            />
          </g>
        </Link>
      </g>

      <defs>
        <linearGradient
          id="paint0_linear_12_15"
          x1="200"
          y1="11.5"
          x2="13.5"
          y2="145.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEDED" />
          <stop offset="0.0844788" stopColor="#E1E1E1" />
          <stop offset="0.349197" stopColor="#CCCCCC" />
          <stop offset="0.982874" stopColor="#A8A8A8" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_12_15"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(100 137) rotate(-90) scale(111.5)"
        >
          <stop stopColor="#FCFCFE" />
          <stop offset="0.372432" stopColor="#DCDCDD" />
          <stop offset="0.548973" stopColor="#B3B3B5" />
          <stop offset="1" stopColor="#979798" />
        </radialGradient>
      </defs>
    </svg>
  );
}
