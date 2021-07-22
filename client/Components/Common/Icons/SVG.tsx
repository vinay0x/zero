import React, { ReactElement } from 'react';

export interface SVGProps {
  width: number;
  height: number;
  className: string;
  strokeWidth: number;
}

export const SVGDefaultProps = {
  width: 24,
  height: 24,
  className: '',
  strokeWidth: 1.5,
};

export default function SVG(props): ReactElement {
  return (
    <svg
      width={props.width}
      height={props.height}
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  );
}
