import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function BillingIcon(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M18.5027 6.9511L16.1369 3.79669C15.4997 2.94716 14.3099 2.74335 13.4263 3.33239L7.9281 6.99788"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.5028 11.4998H21.0038C21.5563 11.4998 22.0042 11.9477 22.0042 12.5002V15.5014C22.0042 16.0539 21.5563 16.5018 21.0038 16.5018H18.5028C17.1215 16.5018 16.0017 15.3821 16.0017 14.0008V14.0008C16.0017 12.6195 17.1215 11.4998 18.5028 11.4998V11.4998Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0037 11.4998V9.49897C21.0037 8.11768 19.884 6.99792 18.5027 6.99792H5.49726C4.11597 6.99792 2.99622 8.11768 2.99622 9.49897V18.5027C2.99622 19.884 4.11597 21.0038 5.49726 21.0038H18.5027C19.884 21.0038 21.0037 19.884 21.0037 18.5027V16.5019"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

BillingIcon.defaultProps = SVGDefaultProps;
