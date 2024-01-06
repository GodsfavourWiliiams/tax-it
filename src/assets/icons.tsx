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
};
