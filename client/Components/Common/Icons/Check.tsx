import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Check(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M20 6.5L9 17.5L4 12.5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

Check.defaultProps = SVGDefaultProps;
