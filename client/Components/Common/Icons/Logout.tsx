import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Logout(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M6.99744 16.0012V19.0025C6.99744 20.66 8.34114 22.0037 9.99869 22.0037H19.0024C20.66 22.0037 22.0037 20.66 22.0037 19.0025V6.99747C22.0037 5.33992 20.66 3.99622 19.0024 3.99622H9.99869C8.34114 3.99622 6.99744 5.33992 6.99744 6.99747V9.99872"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 16.0012L16.0013 13L13 9.99872"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.99622 13H16.0012"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
}

Logout.defaultProps = SVGDefaultProps;
