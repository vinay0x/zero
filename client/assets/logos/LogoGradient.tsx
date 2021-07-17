import * as React from 'react';

function LogoWithGradient(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#05aff2">
            <animate
              attributeName="stop-color"
              values="#05aff2; #7135f2; #05aff2"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#7135f2">
            <animate
              attributeName="stop-color"
              values="#7135f2; #05aff2; #7135f2"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.8314 26.742C36.4467 20.1158 35.8199 10.959 29.9368 5.07594C23.3262 -1.53467 12.5822 -1.50866 5.93954 5.13405C-0.0297589 11.1033 -0.655903 20.3845 4.07557 27.002L12.4266 18.651C15.5508 15.5268 20.6161 15.5268 23.7403 18.651L31.8314 26.742Z"
        fill="url('#gradient')"
      />
    </svg>
  );
}

export default LogoWithGradient;
