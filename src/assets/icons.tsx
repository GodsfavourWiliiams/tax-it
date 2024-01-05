type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  Arror: (props: IconProps) => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 15L12 9L6 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  RemoveIcon: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.25 6.875V10.625"
        stroke="#969090"
        strokeWidth="1.92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 6.875V10.625"
        stroke="#969090"
        strokeWidth="1.92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4.375H12.5"
        stroke="#969090"
        strokeWidth="1.92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 4.375H7.5H11.25V11.25C11.25 12.2856 10.4106 13.125 9.375 13.125H5.625C4.58947 13.125 3.75 12.2856 3.75 11.25V4.375Z"
        stroke="#969090"
        strokeWidth="1.92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 3.125C5.625 2.43464 6.18464 1.875 6.875 1.875H8.125C8.81537 1.875 9.375 2.43464 9.375 3.125V4.375H5.625V3.125Z"
        stroke="#969090"
        strokeWidth="1.92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  RoundAddIcon: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.94186 5.26787C6.94186 4.95968 7.19169 4.70984 7.4999 4.70984C7.8081 4.70984 8.05793 4.95968 8.05793 5.26787V6.94198H9.73204C10.0402 6.94198 10.2901 7.19181 10.2901 7.50002C10.2901 7.80822 10.0402 8.05805 9.73204 8.05805H8.05793V9.73216C8.05793 10.0404 7.8081 10.2902 7.4999 10.2902C7.19169 10.2902 6.94186 10.0404 6.94186 9.73216V8.05805H5.26775C4.95955 8.05805 4.70972 7.80822 4.70972 7.50002C4.70972 7.19181 4.95956 6.94198 5.26775 6.94198H6.94186V5.26787Z"
        fill="#0F0F0F"
        stroke="black"
        strokeWidth="0.000571429"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6384 7.50003C13.6384 10.8901 10.8901 13.6384 7.49996 13.6384C4.10983 13.6384 1.36157 10.8901 1.36157 7.50003C1.36157 4.10989 4.10983 1.36163 7.49996 1.36163C10.8901 1.36163 13.6384 4.10989 13.6384 7.50003ZM2.48145 7.50003C2.48145 10.2717 4.72832 12.5186 7.49996 12.5186C10.2716 12.5186 12.5185 10.2717 12.5185 7.50003C12.5185 4.72838 10.2716 2.48152 7.49996 2.48152C4.72832 2.48152 2.48145 4.72838 2.48145 7.50003Z"
        fill="#0F0F0F"
        stroke="black"
        strokeWidth="0.000571429"
      />
    </svg>
  ),

  circleEmbellishment: (props: IconProps) => (
    <svg
      width="632"
      height="418"
      viewBox="0 0 632 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_1_351)">
        <circle
          cx="377.059"
          cy="348.083"
          r="248.199"
          transform="rotate(60 377.059 348.083)"
          fill="#25A75C"
          fillOpacity="0.39"
        />
      </g>
      <path
        d="M526.199 632.221C392.907 709.178 222.54 663.633 145.673 530.496C68.806 397.359 114.547 227.044 247.839 150.087C381.132 73.1308 551.499 118.676 628.366 251.813C705.233 384.95 659.492 555.265 526.199 632.221Z"
        stroke="#5CB23A"
      />
      <defs>
        <filter
          id="filter0_b_1_351"
          x="60.8195"
          y="31.8427"
          width="632.48"
          height="632.48"
          filterUnits="userSpaceOnUse"
          colorInterpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="34" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_351"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_351"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
