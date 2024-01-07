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
  EMI: (props: IconProps) => (
    <svg
      width="81"
      height="81"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.745 52.2214C39.4854 52.2214 49.0029 42.8472 49.0029 31.2835C49.0029 19.7199 39.4854 10.3457 27.745 10.3457C16.0046 10.3457 6.48718 19.7199 6.48718 31.2835C6.48718 42.8472 16.0046 52.2214 27.745 52.2214Z"
        fill="#25A75C"
        stroke="#22202D"
        strokeWidth="1.52426"
      />
      <path
        d="M27.745 46.9566C36.5333 46.9566 43.6576 39.9397 43.6576 31.2839C43.6576 22.6282 36.5333 15.6113 27.745 15.6113C18.9567 15.6113 11.8324 22.6282 11.8324 31.2839C11.8324 39.9397 18.9567 46.9566 27.745 46.9566Z"
        fill="white"
        stroke="#22202D"
        strokeWidth="1.52426"
      />
      <path
        d="M20.3838 31.2836H27.846V21.8768"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.7449 15.7656V18.8425"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
      />
      <path
        d="M27.7449 44.3184V47.0568"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
      />
      <path
        d="M12.0995 31.4103H15.1764"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
      />
      <path
        d="M40.6521 31.4103H43.3893"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
      />
      <path
        d="M74.1795 46.0371H21.2564V74.3448H74.1795V46.0371Z"
        fill="#25A75C"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.7149 66.1201V52.6825C69.6968 52.6825 68.7204 52.2781 68.0004 51.5582C67.2805 50.8383 66.8761 49.8619 66.8761 48.8438H28.4847C28.4847 49.8619 28.0803 50.8383 27.3604 51.5582C26.6404 52.2781 25.664 52.6825 24.6459 52.6825V66.1201C25.664 66.1201 26.6404 66.5245 27.3604 67.2444C28.0803 67.9643 28.4847 68.9407 28.4847 69.9588H66.8761C66.8761 68.9407 67.2805 67.9643 68.0004 67.2444C68.7204 66.5245 69.6968 66.1201 70.7149 66.1201Z"
        fill="#F7F7F7"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.6798 69.9588C52.0525 69.9588 55.5973 65.2321 55.5973 59.4013C55.5973 53.5705 52.0525 48.8438 47.6798 48.8438C43.3071 48.8438 39.7623 53.5705 39.7623 59.4013C39.7623 65.2321 43.3071 69.9588 47.6798 69.9588Z"
        fill="#25A75C"
        stroke="#22202D"
        strokeWidth="1.52426"
      />
      <path
        d="M62.4871 60.8056C63.5067 60.8056 64.3333 59.979 64.3333 58.9594C64.3333 57.9398 63.5067 57.1133 62.4871 57.1133C61.4675 57.1133 60.641 57.9398 60.641 58.9594C60.641 59.979 61.4675 60.8056 62.4871 60.8056Z"
        fill="#25A75C"
        stroke="#22202D"
        strokeWidth="1.52426"
      />
      <path
        d="M32.9487 60.8056C33.9683 60.8056 34.7948 59.979 34.7948 58.9594C34.7948 57.9398 33.9683 57.1133 32.9487 57.1133C31.9291 57.1133 31.1025 57.9398 31.1025 58.9594C31.1025 59.979 31.9291 60.8056 32.9487 60.8056Z"
        fill="#25A75C"
        stroke="#22202D"
        strokeWidth="1.52426"
      />
      <path
        d="M53.4275 66.6476C52.4768 65.7487 51.3053 65.1173 50.0318 64.8174C49.923 64.7998 49.8245 64.743 49.7547 64.6578C49.6849 64.5726 49.6486 64.4648 49.6527 64.3547C49.6638 64.1085 49.6638 63.8427 49.6626 63.5682C49.6626 62.938 50.4207 62.1787 50.4626 61.295C50.6956 60.8464 50.8307 60.3535 50.8589 59.8488C50.8679 59.7493 50.8566 59.6491 50.8257 59.5541C50.7948 59.4591 50.745 59.3714 50.6792 59.2962C50.7407 58.9664 50.7936 58.618 50.8589 58.2599C51.0452 57.671 50.991 57.0323 50.708 56.4833C50.4251 55.9342 49.9364 55.5194 49.3487 55.3294C48.2654 55.1286 47.2282 54.7301 46.289 54.154C46.033 53.9079 46.209 55.3011 45.9764 55.4057C45.4083 55.5972 44.9367 56.0019 44.6612 56.5344C44.3857 57.0668 44.3277 57.6855 44.4995 58.2599C44.5635 58.618 44.6226 58.9664 44.6792 59.2962C44.6134 59.3714 44.5636 59.4591 44.5327 59.5541C44.5018 59.6491 44.4905 59.7493 44.4995 59.8488C44.5277 60.3535 44.6628 60.8464 44.8958 61.295C44.9376 62.1799 45.6958 62.895 45.6958 63.5682C45.6958 63.8427 45.6958 64.106 45.7056 64.3547C45.7098 64.4648 45.6735 64.5726 45.6037 64.6578C45.5339 64.743 45.4353 64.7998 45.3266 64.8174C44.0531 65.1173 42.8815 65.7487 41.9309 66.6476C42.5501 67.6228 43.3965 68.4334 44.3975 69.01C45.3985 69.5866 46.5243 69.912 47.6786 69.9584C48.8328 69.912 49.9587 69.5866 50.9597 69.01C51.9607 68.4334 52.807 67.6228 53.4263 66.6476H53.4275Z"
        fill="#F7F7F7"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
        strokeLinejoin="round"
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
          colorInterpolationFilters="sRGB"
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
  circleEmbellishment2: (props: IconProps) => (
    <svg
      width="812"
      height="1099"
      viewBox="0 0 812 1099"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_1_96)">
        <circle
          cx="565.984"
          cy="599.791"
          r="343.515"
          transform="rotate(-128.933 565.984 599.791)"
          fill="#25A75C"
          fillOpacity="0.39"
        />
      </g>
      <path
        d="M300.885 243.209C466.671 109.277 709.515 134.945 843.292 300.538C977.068 466.132 951.121 708.945 785.334 842.878C619.548 976.81 376.705 951.142 242.928 785.549C109.151 619.955 135.099 377.141 300.885 243.209Z"
        stroke="#5CB23A"
      />
      <defs>
        <filter
          id="filter0_b_1_96"
          x="154.458"
          y="188.264"
          width="823.054"
          height="823.054"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="34" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_96"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_96"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),

  moneyTransfer: (props: IconProps) => (
    <svg
      width="80"
      height="81"
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M56.6154 6.6543H19.6923C17.6531 6.6543 16 8.3074 16 10.3466V70.6543C16 72.6935 17.6531 74.3466 19.6923 74.3466H56.6154C58.6546 74.3466 60.3077 72.6935 60.3077 70.6543V10.3466C60.3077 8.3074 58.6546 6.6543 56.6154 6.6543Z"
        fill="#25A75C"
      />
      <path
        d="M56.6154 7.26965H19.6923C17.9929 7.26965 16.6154 8.64724 16.6154 10.3466V70.6543C16.6154 72.3536 17.9929 73.7312 19.6923 73.7312H56.6154C58.3147 73.7312 59.6923 72.3536 59.6923 70.6543V10.3466C59.6923 8.64724 58.3147 7.26965 56.6154 7.26965Z"
        stroke="#22202D"
        strokeWidth="1.52426"
      />
      <path
        d="M50.4615 12.8086H25.8461C23.8069 12.8086 22.1538 14.4617 22.1538 16.5009V59.5778C22.1538 61.617 23.8069 63.2701 25.8461 63.2701H50.4615C52.5007 63.2701 54.1538 61.617 54.1538 59.5778V16.5009C54.1538 14.4617 52.5007 12.8086 50.4615 12.8086Z"
        fill="#F7F7F7"
      />
      <path
        d="M50.4615 13.424H25.8461C24.1468 13.424 22.7692 14.8015 22.7692 16.5009V59.5778C22.7692 61.2771 24.1468 62.6547 25.8461 62.6547H50.4615C52.1608 62.6547 53.5384 61.2771 53.5384 59.5778V16.5009C53.5384 14.8015 52.1608 13.424 50.4615 13.424Z"
        stroke="#22202D"
        strokeWidth="1.52426"
      />
      <path
        d="M32.9575 67.3906H43.3489"
        stroke="white"
        strokeWidth="3.04851"
        strokeLinecap="round"
      />
      <path
        d="M53.9619 52.4411C52.3078 53.5636 44.4678 52.9556 45.5927 52.9125C46.4825 52.878 48.5342 51.1033 49.5201 50.2048C46.4899 47.9761 44.4079 44.69 43.6871 40.9982C42.9663 37.3064 43.6593 33.4785 45.6286 30.2737C47.5979 27.0689 50.6998 24.7212 54.319 23.6963C57.9381 22.6714 61.8104 23.0441 65.1676 24.7404C68.5249 26.4368 71.1221 29.333 72.444 32.8545C73.766 36.3761 73.7162 40.2659 72.3045 43.7525C70.8928 47.239 68.2224 50.0677 64.8227 51.6776C61.4231 53.2874 57.5426 53.5608 53.9509 52.4436L53.9619 52.4411Z"
        fill="white"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  security: (props: IconProps) => (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M41.0752 73.8466C69.3632 63.4798 69.1761 39.0638 69.1761 39.0638V12.6491C69.1761 12.6491 48.8192 13.8983 41.0752 6.1543C33.3324 13.8983 12.9743 12.6491 12.9743 12.6491V39.0638C12.9743 39.0638 12.7872 63.4811 41.0752 73.8466Z"
        fill="#25A75C"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.2629 64.0424C22.0857 55.4873 21.7164 39.6879 21.7164 39.0627V21.3236L23.4026 21.2005C29.2183 20.8496 34.9264 19.4746 40.2641 17.139L41.0764 16.7698L41.8887 17.139C47.2264 19.4746 52.9345 20.8496 58.7503 21.2005L60.4364 21.3236V39.059C60.4364 39.7458 60.0672 55.4824 41.89 64.0436L41.0777 64.4129L40.2629 64.0424Z"
        fill="#F7F7F7"
        stroke="#22202D"
        strokeWidth="1.52426"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.6481 39.0639L36.3921 46.7427L53.4998 29.635"
        stroke="#25A75C"
        strokeWidth="4.57277"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  appleStore: (props: IconProps) => (
    <svg
      width="146"
      height="43"
      viewBox="0 0 146 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M144.526 37.6506C144.526 39.8881 142.676 41.7004 140.387 41.7004H4.95139C2.66407 41.7004 0.807434 39.8881 0.807434 37.6506V5.35472C0.807434 3.11833 2.66407 1.29962 4.95139 1.29962H140.386C142.676 1.29962 144.525 3.11833 144.525 5.35472L144.526 37.6506Z"
        fill="black"
      />
      <path
        d="M139.951 1.34841C142.443 1.34841 144.471 3.32565 144.471 5.75554V37.2444C144.471 39.6743 142.443 41.6515 139.951 41.6515H5.38271C2.89052 41.6515 0.862579 39.6743 0.862579 37.2444V5.75554C0.862579 3.32565 2.89052 1.34841 5.38271 1.34841H139.951ZM139.951 0.507399H5.38271C2.42357 0.507399 0 2.87038 0 5.75554V37.2444C0 40.1296 2.42357 42.4926 5.38271 42.4926H139.951C142.91 42.4926 145.333 40.1296 145.333 37.2444V5.75554C145.333 2.87038 142.91 0.507399 139.951 0.507399Z"
        fill="#A6A6A6"
      />
      <path
        d="M32.4341 21.2733C32.4029 17.8903 35.2751 16.2445 35.4064 16.1679C33.7798 13.8555 31.2585 13.5396 30.3725 13.5144C28.255 13.2971 26.2009 14.7498 25.1222 14.7498C24.022 14.7498 22.3609 13.5354 20.5706 13.5711C18.2668 13.6057 16.1116 14.9062 14.9295 16.9257C12.4901 21.0434 14.3094 27.0945 16.6466 30.4229C17.8157 32.053 19.1819 33.873 20.97 33.809C22.7194 33.7387 23.3728 32.7216 25.4839 32.7216C27.5757 32.7216 28.1893 33.809 30.013 33.7681C31.8904 33.7387 33.0725 32.1306 34.2007 30.4859C35.5518 28.6175 36.0943 26.7775 36.1159 26.6831C36.0717 26.6684 32.4696 25.328 32.4341 21.2733Z"
        fill="white"
      />
      <path
        d="M28.9892 11.3249C29.9301 10.1776 30.5738 8.61685 30.3951 7.03296C29.0333 7.09174 27.3302 7.95138 26.3495 9.07344C25.4818 10.0622 24.7067 11.6828 24.9069 13.2069C26.4367 13.3181 28.0074 12.4543 28.9892 11.3249Z"
        fill="white"
      />
      <path
        d="M57.751 33.5753H55.3061L53.9669 29.4723H49.3119L48.0362 33.5753H45.656L50.2679 19.6069H53.1164L57.751 33.5753ZM53.5632 27.7509L52.3521 24.1035C52.224 23.7309 51.9839 22.8534 51.6297 21.4721H51.5867C51.4456 22.0662 51.2185 22.9436 50.9063 24.1035L49.7167 27.7509H53.5632Z"
        fill="white"
      />
      <path
        d="M69.6112 28.4154C69.6112 30.1284 69.1364 31.4824 68.1869 32.4764C67.3364 33.3612 66.2803 33.8031 65.0197 33.8031C63.659 33.8031 62.6815 33.3266 62.0861 32.3735H62.0431V37.6794H59.7479V26.8189C59.7479 25.742 59.7188 24.6367 59.6628 23.5031H61.6814L61.8095 25.0996H61.8525C62.618 23.8967 63.7795 23.2963 65.3384 23.2963C66.557 23.2963 67.5744 23.7655 68.3882 24.7049C69.2042 25.6454 69.6112 26.8819 69.6112 28.4154ZM67.2729 28.4972C67.2729 27.5169 67.0468 26.7087 66.5925 26.0726C66.0963 25.4092 65.4299 25.0775 64.5945 25.0775C64.0282 25.0775 63.5136 25.2623 63.0539 25.6265C62.5932 25.9939 62.2918 26.4736 62.1507 27.0676C62.0797 27.3447 62.0442 27.5715 62.0442 27.7499V29.4293C62.0442 30.1619 62.2745 30.7802 62.7353 31.2851C63.1961 31.7899 63.7946 32.0418 64.531 32.0418C65.3954 32.0418 66.0683 31.7164 66.5495 31.0678C67.0318 30.4181 67.2729 29.5616 67.2729 28.4972Z"
        fill="white"
      />
      <path
        d="M81.4931 28.4154C81.4931 30.1284 81.0183 31.4824 80.0677 32.4764C79.2184 33.3612 78.1623 33.8031 76.9016 33.8031C75.5409 33.8031 74.5634 33.3266 73.9691 32.3735H73.9261V37.6794H71.6309V26.8189C71.6309 25.742 71.6018 24.6367 71.5458 23.5031H73.5644L73.6925 25.0996H73.7355C74.4999 23.8967 75.6615 23.2963 77.2214 23.2963C78.4389 23.2963 79.4563 23.7655 80.2723 24.7049C81.0851 25.6454 81.4931 26.8819 81.4931 28.4154ZM79.1548 28.4972C79.1548 27.5169 78.9277 26.7087 78.4734 26.0726C77.9771 25.4092 77.3129 25.0775 76.4764 25.0775C75.9091 25.0775 75.3956 25.2623 74.9348 25.6265C74.474 25.9939 74.1737 26.4736 74.0326 27.0676C73.9627 27.3447 73.9261 27.5715 73.9261 27.7499V29.4293C73.9261 30.1619 74.1565 30.7802 74.6151 31.2851C75.0758 31.7889 75.6744 32.0418 76.4129 32.0418C77.2774 32.0418 77.9502 31.7164 78.4314 31.0678C78.9137 30.4181 79.1548 29.5616 79.1548 28.4972Z"
        fill="white"
      />
      <path
        d="M94.7775 29.6577C94.7775 30.8459 94.3544 31.8126 93.505 32.5589C92.5716 33.3745 91.2722 33.7817 89.6025 33.7817C88.0609 33.7817 86.825 33.492 85.8895 32.9116L86.4213 31.0464C87.429 31.6405 88.5346 31.9386 89.7392 31.9386C90.6037 31.9386 91.2765 31.7475 91.7599 31.3676C92.2411 30.9876 92.4812 30.4775 92.4812 29.8414C92.4812 29.2746 92.2831 28.797 91.8859 28.4097C91.4908 28.0224 90.8309 27.6624 89.9093 27.3296C87.401 26.4175 86.1479 25.0813 86.1479 23.3243C86.1479 22.176 86.5871 21.2344 87.4667 20.5018C88.343 19.7681 89.5121 19.4018 90.974 19.4018C92.2777 19.4018 93.3607 19.6233 94.2252 20.0652L93.6514 21.8894C92.844 21.4612 91.9311 21.247 90.9094 21.247C90.102 21.247 89.4712 21.4412 89.019 21.8275C88.6369 22.1728 88.4452 22.5937 88.4452 23.0923C88.4452 23.6444 88.6638 24.101 89.103 24.46C89.4852 24.7916 90.1796 25.1506 91.1872 25.5379C92.4198 26.0218 93.3252 26.5876 93.9076 27.2362C94.4879 27.8828 94.7775 28.6921 94.7775 29.6577Z"
        fill="white"
      />
      <path
        d="M102.366 25.1817H99.8362V30.0719C99.8362 31.3157 100.282 31.9371 101.175 31.9371C101.586 31.9371 101.926 31.9025 102.195 31.8332L102.258 33.5325C101.806 33.6973 101.211 33.7802 100.474 33.7802C99.5671 33.7802 98.8587 33.5105 98.3473 32.972C97.8381 32.4325 97.5819 31.5277 97.5819 30.2566V25.1796H96.0748V23.5002H97.5819V21.656L99.8362 20.9926V23.5002H102.366V25.1817Z"
        fill="white"
      />
      <path
        d="M113.781 28.4562C113.781 30.0044 113.326 31.2755 112.42 32.2695C111.469 33.2929 110.208 33.803 108.635 33.803C107.119 33.803 105.912 33.3129 105.012 32.3325C104.112 31.3522 103.662 30.1146 103.662 28.6231C103.662 27.0623 104.125 25.7839 105.054 24.7899C105.981 23.7948 107.232 23.2973 108.805 23.2973C110.321 23.2973 111.54 23.7875 112.461 24.7689C113.341 25.7209 113.781 26.95 113.781 28.4562ZM111.399 28.5287C111.399 27.5997 111.196 26.8031 110.783 26.1386C110.302 25.3346 109.614 24.9337 108.723 24.9337C107.8 24.9337 107.1 25.3357 106.618 26.1386C106.206 26.8041 106.003 27.6134 106.003 28.5706C106.003 29.4996 106.206 30.2962 106.618 30.9596C107.115 31.7636 107.808 32.1646 108.703 32.1646C109.579 32.1646 110.267 31.7552 110.763 30.9386C111.186 30.2616 111.399 29.4565 111.399 28.5287Z"
        fill="white"
      />
      <path
        d="M121.241 25.4712C121.014 25.4302 120.772 25.4092 120.518 25.4092C119.71 25.4092 119.086 25.7063 118.647 26.3014C118.264 26.8262 118.073 27.4896 118.073 28.2905V33.5753H115.779L115.8 26.6751C115.8 25.5142 115.771 24.4572 115.714 23.5042H117.713L117.797 25.4313H117.861C118.103 24.769 118.485 24.2357 119.008 23.8358C119.52 23.4758 120.072 23.2963 120.667 23.2963C120.879 23.2963 121.071 23.311 121.241 23.3373V25.4712Z"
        fill="white"
      />
      <path
        d="M131.506 28.0621C131.506 28.463 131.479 28.801 131.422 29.077H124.536C124.563 30.0721 124.896 30.8331 125.535 31.3579C126.116 31.8271 126.866 32.0622 127.788 32.0622C128.807 32.0622 129.737 31.9037 130.574 31.5857L130.933 33.1391C129.956 33.5548 128.802 33.7615 127.47 33.7615C125.868 33.7615 124.611 33.3018 123.696 32.3834C122.783 31.4649 122.325 30.2316 122.325 28.6845C122.325 27.1657 122.75 25.9009 123.602 24.8922C124.493 23.8153 125.698 23.2768 127.214 23.2768C128.703 23.2768 129.83 23.8153 130.595 24.8922C131.201 25.7476 131.506 26.8056 131.506 28.0621ZM129.317 27.4816C129.332 26.8182 129.183 26.2451 128.872 25.7613C128.474 25.1388 127.864 24.8281 127.043 24.8281C126.292 24.8281 125.682 25.1315 125.216 25.7403C124.833 26.2242 124.606 26.8046 124.536 27.4806H129.317V27.4816Z"
        fill="white"
      />
      <path
        d="M52.8044 11.0139C52.8044 12.2494 52.4244 13.1793 51.6654 13.8039C50.9624 14.3801 49.9634 14.6688 48.6694 14.6688C48.0278 14.6688 47.4787 14.6415 47.019 14.5869V7.83672C47.6187 7.74225 48.2646 7.69397 48.9622 7.69397C50.1948 7.69397 51.1239 7.95533 51.7505 8.47804C52.4524 9.06898 52.8044 9.91393 52.8044 11.0139ZM51.6148 11.0444C51.6148 10.2435 51.3973 9.62948 50.9624 9.20124C50.5275 8.77404 49.8923 8.55991 49.0559 8.55991C48.7006 8.55991 48.3981 8.58301 48.1473 8.63129V13.7629C48.2861 13.7839 48.5402 13.7934 48.9095 13.7934C49.7728 13.7934 50.4392 13.5593 50.9086 13.0912C51.378 12.623 51.6148 11.9408 51.6148 11.0444Z"
        fill="white"
      />
      <path
        d="M59.1118 12.093C59.1118 12.854 58.8889 13.4775 58.4432 13.9666C57.976 14.4694 57.357 14.7202 56.584 14.7202C55.8391 14.7202 55.2459 14.4799 54.8034 13.997C54.3621 13.5153 54.1414 12.9075 54.1414 12.1749C54.1414 11.4086 54.3685 10.7799 54.825 10.2918C55.2814 9.80377 55.895 9.5592 56.668 9.5592C57.413 9.5592 58.0115 9.79957 58.4648 10.2813C58.8954 10.7495 59.1118 11.3541 59.1118 12.093ZM57.9416 12.1287C57.9416 11.6721 57.8404 11.2806 57.639 10.9542C57.4022 10.5595 57.0653 10.3622 56.6271 10.3622C56.1739 10.3622 55.8294 10.5595 55.5925 10.9542C55.3901 11.2806 55.29 11.6784 55.29 12.1486C55.29 12.6052 55.3912 12.9967 55.5925 13.3232C55.8369 13.7178 56.1771 13.9152 56.6163 13.9152C57.0469 13.9152 57.385 13.7147 57.6283 13.3127C57.8371 12.9799 57.9416 12.5853 57.9416 12.1287Z"
        fill="white"
      />
      <path
        d="M67.5693 9.65967L65.9814 14.6076H64.9479L64.2901 12.459C64.1233 11.9227 63.9876 11.3895 63.8821 10.8604H63.8617C63.7637 11.4042 63.6281 11.9363 63.4537 12.459L62.755 14.6076H61.7097L60.2165 9.65967H61.3759L61.9497 12.0119C62.0886 12.5682 62.2027 13.0983 62.2942 13.6H62.3147C62.3986 13.1864 62.5375 12.6595 62.7334 12.0224L63.4537 9.66072H64.373L65.0631 11.972C65.2299 12.5357 65.3656 13.0783 65.47 13.601H65.5012C65.5777 13.092 65.6929 12.5493 65.8457 11.972L66.4615 9.66072H67.5693V9.65967Z"
        fill="white"
      />
      <path
        d="M73.418 14.6072H72.2898V11.7732C72.2898 10.8999 71.9496 10.4632 71.2671 10.4632C70.9323 10.4632 70.6621 10.5829 70.4522 10.8233C70.2444 11.0636 70.1389 11.347 70.1389 11.6714V14.6061H69.0107V11.0731C69.0107 10.6385 68.9967 10.1672 68.9698 9.65711H69.9613L70.014 10.4307H70.0453C70.1766 10.1903 70.3725 9.99194 70.6298 9.83345C70.9355 9.64872 71.2779 9.5553 71.6525 9.5553C72.1262 9.5553 72.5202 9.70435 72.8335 10.0035C73.2232 10.3698 73.418 10.9167 73.418 11.643V14.6072Z"
        fill="white"
      />
      <path d="M76.5292 14.6076H75.402V7.38928H76.5292V14.6076Z" fill="white" />
      <path
        d="M83.1716 12.093C83.1716 12.854 82.9487 13.4775 82.503 13.9666C82.0358 14.4694 81.4157 14.7202 80.6439 14.7202C79.8978 14.7202 79.3046 14.4799 78.8632 13.997C78.4219 13.5153 78.2012 12.9075 78.2012 12.1749C78.2012 11.4086 78.4283 10.7799 78.8848 10.2918C79.3412 9.80377 79.9549 9.5592 80.7267 9.5592C81.4728 9.5592 82.0703 9.79957 82.5246 10.2813C82.9552 10.7495 83.1716 11.3541 83.1716 12.093ZM82.0003 12.1287C82.0003 11.6721 81.8991 11.2806 81.6978 10.9542C81.462 10.5595 81.124 10.3622 80.6869 10.3622C80.2326 10.3622 79.8881 10.5595 79.6524 10.9542C79.45 11.2806 79.3498 11.6784 79.3498 12.1486C79.3498 12.6052 79.451 12.9967 79.6524 13.3232C79.8967 13.7178 80.2369 13.9152 80.6761 13.9152C81.1068 13.9152 81.4437 13.7147 81.687 13.3127C81.8969 12.9799 82.0003 12.5853 82.0003 12.1287Z"
        fill="white"
      />
      <path
        d="M88.6317 14.6079H87.6186L87.5347 14.038H87.5035C87.1568 14.4925 86.6627 14.7202 86.0211 14.7202C85.542 14.7202 85.1544 14.5701 84.8627 14.272C84.5979 14.0012 84.4655 13.6643 84.4655 13.2644C84.4655 12.6598 84.7238 12.199 85.2438 11.8799C85.7627 11.5608 86.4926 11.4045 87.4324 11.4118V11.3194C87.4324 10.6676 87.0814 10.3422 86.3785 10.3422C85.8779 10.3422 85.4365 10.465 85.0554 10.7085L84.8261 9.9864C85.2976 9.70195 85.88 9.5592 86.5669 9.5592C87.8932 9.5592 88.5585 10.2415 88.5585 11.606V13.4281C88.5585 13.9225 88.5832 14.3161 88.6317 14.6079ZM87.4604 12.9075V12.1444C86.2159 12.1234 85.5937 12.4562 85.5937 13.1416C85.5937 13.3998 85.6647 13.5929 85.8101 13.722C85.9554 13.8511 86.1406 13.9152 86.3612 13.9152C86.6088 13.9152 86.8403 13.8385 87.0513 13.6863C87.2634 13.5331 87.3936 13.3389 87.4421 13.1007C87.4539 13.0471 87.4604 12.982 87.4604 12.9075Z"
        fill="white"
      />
      <path
        d="M95.0426 14.6076H94.0414L93.9886 13.813H93.9574C93.6377 14.4176 93.0929 14.7199 92.3275 14.7199C91.716 14.7199 91.2068 14.4858 90.8031 14.0177C90.3994 13.5496 90.1981 12.9418 90.1981 12.1955C90.1981 11.3947 90.4167 10.746 90.8559 10.2506C91.2811 9.78873 91.8022 9.55781 92.4222 9.55781C93.1037 9.55781 93.5806 9.78139 93.8519 10.2296H93.8734V7.38928H95.0027V13.2746C95.0027 13.7563 95.0156 14.2003 95.0426 14.6076ZM93.8734 12.5209V11.6959C93.8734 11.5532 93.8627 11.4377 93.8422 11.3495C93.7787 11.085 93.642 10.8625 93.4342 10.683C93.2243 10.5035 92.9713 10.4133 92.6795 10.4133C92.2586 10.4133 91.9292 10.576 91.687 10.9024C91.4469 11.2288 91.3253 11.6455 91.3253 12.1546C91.3253 12.6437 91.4404 13.0405 91.6719 13.3459C91.9163 13.6713 92.2457 13.834 92.658 13.834C93.0283 13.834 93.3244 13.6986 93.5494 13.4267C93.7669 13.1759 93.8734 12.8736 93.8734 12.5209Z"
        fill="white"
      />
      <path
        d="M104.692 12.093C104.692 12.854 104.469 13.4775 104.023 13.9666C103.556 14.4694 102.938 14.7202 102.164 14.7202C101.42 14.7202 100.827 14.4799 100.383 13.997C99.9419 13.5153 99.7213 12.9075 99.7213 12.1749C99.7213 11.4086 99.9484 10.7799 100.405 10.2918C100.861 9.80377 101.475 9.5592 102.249 9.5592C102.993 9.5592 103.593 9.79957 104.045 10.2813C104.475 10.7495 104.692 11.3541 104.692 12.093ZM103.523 12.1287C103.523 11.6721 103.421 11.2806 103.22 10.9542C102.982 10.5595 102.646 10.3622 102.207 10.3622C101.755 10.3622 101.41 10.5595 101.172 10.9542C100.97 11.2806 100.87 11.6784 100.87 12.1486C100.87 12.6052 100.971 12.9967 101.172 13.3232C101.417 13.7178 101.757 13.9152 102.196 13.9152C102.627 13.9152 102.966 13.7147 103.209 13.3127C103.417 12.9799 103.523 12.5853 103.523 12.1287Z"
        fill="white"
      />
      <path
        d="M110.758 14.6072H109.631V11.7732C109.631 10.8999 109.29 10.4632 108.607 10.4632C108.272 10.4632 108.002 10.5829 107.793 10.8233C107.584 11.0636 107.48 11.347 107.48 11.6714V14.6061H106.35V11.0731C106.35 10.6385 106.338 10.1672 106.311 9.65711H107.301L107.354 10.4307H107.385C107.517 10.1903 107.713 9.99194 107.97 9.83345C108.276 9.64872 108.618 9.5553 108.993 9.5553C109.466 9.5553 109.86 9.70435 110.173 10.0035C110.564 10.3698 110.758 10.9167 110.758 11.643V14.6072Z"
        fill="white"
      />
      <path
        d="M118.351 10.4836H117.108V12.8872C117.108 13.4981 117.329 13.8036 117.766 13.8036C117.969 13.8036 118.137 13.7868 118.269 13.7521L118.298 14.5866C118.075 14.6685 117.782 14.7094 117.422 14.7094C116.976 14.7094 116.629 14.5771 116.379 14.3126C116.127 14.0481 116.002 13.6031 116.002 12.9786V10.4836H115.26V9.65963H116.002V8.75275L117.107 8.42737V9.65858H118.35V10.4836H118.351Z"
        fill="white"
      />
      <path
        d="M124.323 14.6076H123.194V11.7946C123.194 10.9076 122.854 10.4636 122.173 10.4636C121.649 10.4636 121.292 10.7208 121.096 11.2351C121.063 11.3432 121.043 11.4755 121.043 11.6308V14.6065H119.916V7.38928H121.043V10.3713H121.065C121.42 9.82862 121.929 9.55782 122.589 9.55782C123.056 9.55782 123.443 9.70686 123.75 10.006C124.132 10.3786 124.323 10.9328 124.323 11.6655V14.6076Z"
        fill="white"
      />
      <path
        d="M130.484 11.8996C130.484 12.0969 130.469 12.2627 130.442 12.3981H127.059C127.074 12.8873 127.235 13.2599 127.549 13.5181C127.835 13.749 128.204 13.8645 128.656 13.8645C129.157 13.8645 129.613 13.7868 130.025 13.6304L130.201 14.3945C129.72 14.5982 129.154 14.7 128.498 14.7C127.712 14.7 127.093 14.4743 126.645 14.023C126.195 13.5716 125.973 12.966 125.973 12.206C125.973 11.4598 126.18 10.8384 126.599 10.343C127.036 9.81394 127.627 9.54944 128.373 9.54944C129.103 9.54944 129.658 9.81394 130.032 10.343C130.335 10.7628 130.484 11.2824 130.484 11.8996ZM129.408 11.6151C129.416 11.2887 129.342 11.0074 129.189 10.7702C128.993 10.4647 128.695 10.3115 128.291 10.3115C127.923 10.3115 127.623 10.4605 127.394 10.7597C127.206 10.9979 127.095 11.2824 127.059 11.6151H129.408Z"
        fill="white"
      />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.87727 2.56C8.94364 2.51091 9.28364 2.5 12 2.5C14.7164 2.5 15.0564 2.51182 16.1218 2.56C17.1873 2.60818 17.9145 2.77818 18.5509 3.02455C19.2173 3.27636 19.8218 3.67 20.3218 4.17909C20.8309 4.67818 21.2236 5.28182 21.4745 5.94909C21.7218 6.58545 21.8909 7.31273 21.94 8.37636C21.9891 9.44455 22 9.78455 22 12.5C22 15.2164 21.9882 15.5564 21.94 16.6227C21.8918 17.6864 21.7218 18.4136 21.4745 19.05C21.2236 19.7174 20.8303 20.322 20.3218 20.8218C19.8218 21.3309 19.2173 21.7236 18.5509 21.9745C17.9145 22.2218 17.1873 22.3909 16.1236 22.44C15.0564 22.4891 14.7164 22.5 12 22.5C9.28364 22.5 8.94364 22.4882 7.87727 22.44C6.81364 22.3918 6.08636 22.2218 5.45 21.9745C4.78266 21.7236 4.17802 21.3302 3.67818 20.8218C3.16944 20.3224 2.77574 19.7181 2.52455 19.0509C2.27818 18.4145 2.10909 17.6873 2.06 16.6236C2.01091 15.5555 2 15.2155 2 12.5C2 9.78364 2.01182 9.44364 2.06 8.37818C2.10818 7.31273 2.27818 6.58545 2.52455 5.94909C2.77611 5.28189 3.17011 4.67756 3.67909 4.17818C4.17822 3.66955 4.78225 3.27586 5.44909 3.02455C6.08545 2.77818 6.81273 2.60909 7.87636 2.56H7.87727ZM16.0409 4.36C14.9864 4.31182 14.67 4.30182 12 4.30182C9.33 4.30182 9.01364 4.31182 7.95909 4.36C6.98364 4.40455 6.45455 4.56727 6.10182 4.70455C5.63545 4.88636 5.30182 5.10182 4.95182 5.45182C4.62004 5.77459 4.36471 6.16753 4.20455 6.60182C4.06727 6.95455 3.90455 7.48364 3.86 8.45909C3.81182 9.51364 3.80182 9.83 3.80182 12.5C3.80182 15.17 3.81182 15.4864 3.86 16.5409C3.90455 17.5164 4.06727 18.0455 4.20455 18.3982C4.36455 18.8318 4.62 19.2255 4.95182 19.5482C5.27455 19.88 5.66818 20.1355 6.10182 20.2955C6.45455 20.4327 6.98364 20.5955 7.95909 20.64C9.01364 20.6882 9.32909 20.6982 12 20.6982C14.6709 20.6982 14.9864 20.6882 16.0409 20.64C17.0164 20.5955 17.5455 20.4327 17.8982 20.2955C18.3645 20.1136 18.6982 19.8982 19.0482 19.5482C19.38 19.2255 19.6355 18.8318 19.7955 18.3982C19.9327 18.0455 20.0955 17.5164 20.14 16.5409C20.1882 15.4864 20.1982 15.17 20.1982 12.5C20.1982 9.83 20.1882 9.51364 20.14 8.45909C20.0955 7.48364 19.9327 6.95455 19.7955 6.60182C19.6136 6.13545 19.3982 5.80182 19.0482 5.45182C18.7254 5.12006 18.3325 4.86474 17.8982 4.70455C17.5455 4.56727 17.0164 4.40455 16.0409 4.36ZM10.7227 15.5827C11.4361 15.8797 12.2303 15.9197 12.9699 15.6961C13.7095 15.4725 14.3485 14.999 14.7778 14.3566C15.2071 13.7142 15.4001 12.9426 15.3237 12.1737C15.2473 11.4049 14.9064 10.6863 14.3591 10.1409C14.0102 9.79225 13.5884 9.52528 13.1239 9.35922C12.6595 9.19317 12.164 9.13215 11.6732 9.18056C11.1823 9.22897 10.7083 9.38562 10.2853 9.63921C9.86223 9.8928 9.50068 10.237 9.22664 10.6471C8.9526 11.0572 8.7729 11.523 8.70047 12.0109C8.62804 12.4988 8.66468 12.9966 8.80776 13.4687C8.95084 13.9407 9.1968 14.3751 9.52793 14.7407C9.85906 15.1062 10.2671 15.3938 10.7227 15.5827ZM8.36545 8.86545C8.84275 8.38816 9.40938 8.00955 10.033 7.75124C10.6566 7.49293 11.325 7.35998 12 7.35998C12.675 7.35998 13.3434 7.49293 13.967 7.75124C14.5906 8.00955 15.1573 8.38816 15.6345 8.86545C16.1118 9.34275 16.4905 9.90938 16.7488 10.533C17.0071 11.1566 17.14 11.825 17.14 12.5C17.14 13.175 17.0071 13.8434 16.7488 14.467C16.4905 15.0906 16.1118 15.6573 15.6345 16.1345C14.6706 17.0985 13.3632 17.64 12 17.64C10.6368 17.64 9.3294 17.0985 8.36545 16.1345C7.40151 15.1706 6.85998 13.8632 6.85998 12.5C6.85998 11.1368 7.40151 9.8294 8.36545 8.86545ZM18.28 8.12545C18.3983 8.01388 18.493 7.87971 18.5585 7.73089C18.624 7.58206 18.6589 7.42161 18.6613 7.25903C18.6637 7.09645 18.6334 6.93504 18.5723 6.78437C18.5111 6.6337 18.4204 6.49683 18.3054 6.38185C18.1904 6.26688 18.0536 6.17614 17.9029 6.11502C17.7522 6.05389 17.5908 6.02361 17.4282 6.02598C17.2657 6.02835 17.1052 6.06332 16.9564 6.12881C16.8076 6.19431 16.6734 6.289 16.5618 6.40727C16.3448 6.6373 16.226 6.94284 16.2306 7.25903C16.2352 7.57522 16.3629 7.87716 16.5865 8.10077C16.8101 8.32437 17.1121 8.45203 17.4282 8.45664C17.7444 8.46125 18.05 8.34245 18.28 8.12545Z"
        fill="#979797"
      />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 12.56C2.00056 14.956 2.85047 17.2732 4.39696 19.0952C5.94345 20.9171 8.08511 22.1244 10.437 22.4999V15.4678H7.9V12.56H10.44V10.3464C10.3839 9.8283 10.4419 9.30414 10.6098 8.81114C10.7777 8.31814 11.0515 7.86839 11.4116 7.49384C11.7718 7.11928 12.2095 6.8291 12.6936 6.64392C13.1778 6.45873 13.6965 6.38308 14.213 6.42234C14.963 6.43441 15.713 6.50182 16.453 6.62357V9.09773H15.189C14.9742 9.06942 14.7558 9.09005 14.5499 9.15809C14.3441 9.22612 14.1561 9.33983 13.9998 9.49081C13.8435 9.64179 13.7229 9.82618 13.647 10.0303C13.571 10.2345 13.5416 10.4532 13.561 10.6704V12.56H16.332L15.889 15.4688H13.561V22.4999C15.4486 22.1997 17.2112 21.3616 18.6402 20.0848C20.0691 18.8081 21.1045 17.146 21.6238 15.2955C22.143 13.4451 22.1244 11.4836 21.5702 9.64341C21.0159 7.80323 19.9492 6.16137 18.4964 4.91223C17.0435 3.66308 15.2653 2.85897 13.3724 2.59508C11.4794 2.3312 9.55092 2.6186 7.81525 3.42326C6.07958 4.22792 4.60942 5.51613 3.5788 7.13539C2.54819 8.75464 2.0003 10.6371 2 12.56Z"
        fill="#979797"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.643 5.43659C22.808 5.80659 21.911 6.05659 20.968 6.16959C21.941 5.58738 22.669 4.67105 23.016 3.59159C22.1019 4.13458 21.1014 4.51678 20.058 4.72159C19.3564 3.97245 18.4271 3.47591 17.4143 3.30906C16.4016 3.14221 15.3621 3.31438 14.4572 3.79884C13.5524 4.2833 12.8328 5.05295 12.4102 5.98829C11.9875 6.92363 11.8855 7.97234 12.12 8.97159C10.2677 8.87858 8.45564 8.39714 6.80144 7.55849C5.14723 6.71985 3.68785 5.54275 2.51801 4.10359C2.11801 4.79359 1.88801 5.59359 1.88801 6.44559C1.88757 7.21258 2.07644 7.96783 2.43789 8.64432C2.79934 9.32081 3.32217 9.89763 3.96001 10.3236C3.22029 10.3001 2.49688 10.1002 1.85001 9.74059V9.80059C1.84994 10.8763 2.22204 11.919 2.90319 12.7516C3.58434 13.5842 4.53258 14.1555 5.58701 14.3686C4.9008 14.5543 4.18135 14.5817 3.48301 14.4486C3.78051 15.3742 4.36001 16.1836 5.14038 16.7635C5.92075 17.3434 6.86293 17.6648 7.83501 17.6826C6.18484 18.978 4.1469 19.6807 2.04901 19.6776C1.67739 19.6777 1.30609 19.656 0.937012 19.6126C3.06649 20.9818 5.54535 21.7084 8.07701 21.7056C16.647 21.7056 21.332 14.6076 21.332 8.45159C21.332 8.25159 21.327 8.04959 21.318 7.84959C22.2293 7.19056 23.0159 6.37448 23.641 5.43959L23.643 5.43659Z"
        fill="#979797"
      />
    </svg>
  ),
};
