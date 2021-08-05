import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function ConfigIcon(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.301 7.57416C15.2257 8.03677 15.975 8.78746 16.4358 9.71305C17.6228 12.0068 16.8662 14.8272 14.6906 16.2189C12.5151 17.6107 9.63735 17.1154 8.05235 15.0763C6.86985 13.5322 6.67844 11.4465 7.56015 9.71305C8.02207 8.78683 8.77282 8.03607 9.69904 7.57416C9.85496 7.49731 10.0396 7.50693 10.1867 7.59955C10.3338 7.69218 10.4223 7.85453 10.4203 8.02835V12H13.5837V8.02835C13.5824 7.85566 13.6704 7.69456 13.8163 7.60218C13.9622 7.5098 14.1454 7.49921 14.301 7.57416Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9.00375"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.49896 16.3268V20.6506"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.501 16.3278V20.6506"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

ConfigIcon.defaultProps = SVGDefaultProps;
