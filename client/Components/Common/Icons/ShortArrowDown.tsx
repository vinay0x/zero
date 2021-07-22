import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function ShortArrowDown(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M8 10L12 14L16 10"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
}

ShortArrowDown.defaultProps = SVGDefaultProps;
