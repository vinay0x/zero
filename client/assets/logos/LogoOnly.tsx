import * as React from 'react';

function LogoOnly(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={35}
      height={28}
      viewBox="0 0 35 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.8314 26.742C36.4467 20.1158 35.8199 10.959 29.9368 5.07594C23.3262 -1.53467 12.5822 -1.50866 5.93954 5.13405C-0.0297589 11.1033 -0.655903 20.3845 4.07557 27.002L12.4266 18.651C15.5508 15.5268 20.6161 15.5268 23.7403 18.651L31.8314 26.742Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default LogoOnly;
