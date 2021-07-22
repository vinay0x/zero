import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Feedback(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M2.99622 5.99747C2.99622 4.33978 4.33978 2.99622 5.99747 2.99622H18.0025C19.6602 2.99622 21.0037 4.33978 21.0037 5.99747V14.0008C21.0037 15.6585 19.6602 17.002 18.0025 17.002H13.0004L7.9983 21.0037V17.002H5.99747C4.33978 17.002 2.99622 15.6585 2.99622 14.0008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.99622 9.99911H9.99913"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99829 12L9.99912 9.99912L7.99829 7.99829"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

Feedback.defaultProps = SVGDefaultProps;
