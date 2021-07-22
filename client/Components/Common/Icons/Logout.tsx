import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Logout(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.3639C14.8493 21.8787 9.1508 21.8787 5.6361 18.3639C2.12138 14.8492 2.12138 9.15074 5.6361 5.63604C9.15082 2.12132 14.8493 2.12132 18.364 5.63604"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 7V12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.534 8.46606C17.486 10.4181 17.486 13.5831 15.534 15.5351C13.582 17.4871 10.417 17.4871 8.465 15.5351C6.513 13.5831 6.513 10.4181 8.465 8.46606"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
}

Logout.defaultProps = SVGDefaultProps;
