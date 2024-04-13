import IPodScreen from "../iPodScreen/IPodScreen";
import IPodScrollWheel from "../iPodScrollWheel/IPodScrollWheel";

export default function IPodShell() {
  return (
    <svg
      width="348"
      height="558"
      viewBox="0 0 348 558"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="iPodBody">
        <g id="Shell">
          <g id="Shell_2">
            <rect x="2" y="2" width="344" height="554" rx="42" fill="#FEFEFE" />
            <rect
              x="2"
              y="2"
              width="344"
              height="554"
              rx="44"
              stroke="#979798"
              strokeWidth="5"
            />
            <rect
              x="2"
              y="2"
              width="344"
              height="554"
              rx="42"
              stroke="black"
              strokeOpacity=".4"
              strokeWidth="2"
            />
          </g>
          <g
            id="ScreenContainer"
            style={{
              transform: "translate(9.2%, 6.5%)",
            }}
          >
            <IPodScreen />
          </g>
          <g
            id="ScrollWheelContainer"
            style={{
              transform: "translate(20%, 55%)",
            }}
          >
            <IPodScrollWheel />
          </g>
        </g>
        <g id="ShadowOverlay" className="mix-blend" opacity=".7">
          <g id="ShadowShell">
            <rect
              x="2"
              y="2"
              width="344"
              height="554"
              rx="42"
              fill="url(#paint0_linear_13_68)"
              fillOpacity="0.5"
            />
            <rect
              x="2"
              y="2"
              width="344"
              height="554"
              rx="42"
              stroke="#EDF6FF"
              strokeWidth="4"
            />
            <rect
              x="2"
              y="2"
              width="344"
              height="554"
              rx="42"
              stroke="black"
              strokeOpacity="0.5"
              strokeWidth="4"
            />
          </g>
          <g id="ShadowBezel">
            <path
              d="M32 41C32 35.4772 36.4772 31 42 31H307C312.523 31 317 35.4772 317 41V246C317 251.523 312.523 256 307 256H42C36.4771 256 32 251.523 32 246V41Z"
              fill="url(#paint1_linear_13_68)"
              fillOpacity="0.8"
            />
            <path
              d="M32 41C32 35.4772 36.4772 31 42 31H307C312.523 31 317 35.4772 317 41V246C317 251.523 312.523 256 307 256H42C36.4771 256 32 251.523 32 246V41Z"
              fill="url(#paint2_linear_13_68)"
              fillOpacity="0.5"
            />
          </g>
        </g>
      </g>

      <defs>
        <filter
          id="filter0_i_13_68"
          x="37"
          y="36"
          width="275"
          height="219"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_13_68"
          />
        </filter>
        <linearGradient
          id="paint0_linear_13_68"
          x1="327.5"
          y1="269"
          x2="22"
          y2="412"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.439099" stopColor="#E0E0E0" />
          <stop offset="1.577" stopColor="#171717" />
          <stop offset="1" stopColor="#1E1E1E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_13_68"
          x1="220.5"
          y1="222"
          x2="81.9789"
          y2="280.511"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.406687" stopColor="#F4F2F2" />
          <stop offset="0.554967" stopColor="#E7E6E6" />
          <stop offset="1" stopColor="#E3E3E3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_13_68"
          x1="220.5"
          y1="222"
          x2="81.9789"
          y2="280.511"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.406687" stopColor="#F4F2F2" />
          <stop offset="0.554967" stopColor="#E7E6E6" />
          <stop offset="1" stopColor="#E3E3E3" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_13_68"
          x1="312.809"
          y1="136.855"
          x2="147.678"
          y2="295.524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.450668" stopColor="#E0E0E0" />
          <stop offset="0.554967" stopColor="#D0D0D0" />
          <stop offset="1" stopColor="#C4C4C4" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_13_68"
          x1="312.809"
          y1="136.855"
          x2="147.678"
          y2="295.524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.450668" stopColor="#E0E0E0" />
          <stop offset="0.554967" stopColor="#D0D0D0" />
          <stop offset="1" stopColor="#C4C4C4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
