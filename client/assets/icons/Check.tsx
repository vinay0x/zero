import React from 'react';

interface SVGProps {
  width: number;
  height: number;
}

export default function Check(props: SVGProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.561 7.44397L12.005 15L8.228 11.222"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C13.453 3 14.821 3.353 16.036 3.964"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

Check.defaultProps = {
  width: 24,
  height: 24,
};
