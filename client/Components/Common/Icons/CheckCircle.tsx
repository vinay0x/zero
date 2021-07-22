import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function CheckCircle(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 12H16.309C16.12 12 15.946 12.107 15.862 12.276L14.447 15.105C14.263 15.474 13.737 15.474 13.553 15.105L10.43 8.86103C10.249 8.49903 9.735 8.49103 9.543 8.84703L7.984 11.737C7.896 11.899 7.727 12 7.544 12H6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
}

CheckCircle.defaultProps = SVGDefaultProps;
