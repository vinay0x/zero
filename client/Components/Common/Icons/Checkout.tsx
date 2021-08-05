import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function CheckoutIcon(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M19 9C20.105 9 21 9.895 21 11V18C21 19.105 20.105 20 19 20H9C7.895 20 7 19.105 7 18V18"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 17L17 15L15 13"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9H16V6C16 4.895 15.105 4 14 4H5C3.895 4 3 4.895 3 6V13C3 14.105 3.895 15 5 15H17"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

CheckoutIcon.defaultProps = SVGDefaultProps;
