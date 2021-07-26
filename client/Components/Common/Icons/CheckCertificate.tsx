import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function CheckCertificate(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.495 13.465L4.69 15.029L4.948 16.976C5.091 18.056 5.94 18.906 7.02 19.05L8.972 19.311L10.535 20.505C11.4 21.166 12.599 21.166 13.464 20.505L15.028 19.31H15.026L16.974 19.052C18.054 18.909 18.904 18.06 19.048 16.98L19.308 15.028C19.308 15.029 19.912 14.238 20.503 13.465C21.164 12.6 21.163 11.401 20.503 10.536L19.31 8.97099L19.052 7.02399C18.909 5.94399 18.06 5.09399 16.98 4.94999L15.027 4.68999L13.464 3.49599C12.599 2.83499 11.4 2.83499 10.535 3.49599L8.971 4.68999H8.973L7.025 4.94899C5.945 5.09199 5.095 5.94099 4.951 7.02099L4.69 8.97299C4.69 8.97199 4.086 9.76299 3.495 10.536C2.835 11.4 2.835 12.6 3.495 13.465V13.465Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.803 10.602L11.302 14.103L9.19897 12.002"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  );
}

CheckCertificate.defaultProps = SVGDefaultProps;
