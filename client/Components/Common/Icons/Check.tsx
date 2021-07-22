import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Check(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M19.561 7.44397L12.005 15L8.228 11.222"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C13.453 3 14.821 3.353 16.036 3.964"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

Check.defaultProps = SVGDefaultProps;
