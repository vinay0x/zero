import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Integration(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M13.0004 20.9417C12.6685 20.9828 12.3344 21.0037 12 21.0037C7.02733 21.0037 2.99622 16.9726 2.99622 12C2.99622 7.02733 7.02733 2.99622 12 2.99622C16.9726 2.99622 21.0037 7.02733 21.0037 12C21.0037 12.3344 20.9828 12.6685 20.9417 13.0004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0034 17.0021L17.5023 19.5031L16.0017 18.0025"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0455 15.1363C11.8903 16.2901 10.0189 16.2901 8.86372 15.1363V15.1363C7.70998 13.9812 7.70998 12.1098 8.86372 10.9546"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9546 8.86372C12.1098 7.70998 13.9812 7.70998 15.1363 8.86372V8.86372C16.2901 10.0189 16.2901 11.8903 15.1363 13.0455"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9996 13.0004L13.0005 10.9996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

Integration.defaultProps = SVGDefaultProps;
