import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Google(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M17.12 5.856C15.733 4.698 13.948 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

Google.defaultProps = SVGDefaultProps;
