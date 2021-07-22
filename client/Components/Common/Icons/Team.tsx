import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Team(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M20.7925 9.52349C21.5825 10.3135 21.5825 11.5944 20.7925 12.3844C20.0024 13.1745 18.7215 13.1745 17.9315 12.3844C17.1415 11.5944 17.1415 10.3135 17.9315 9.52349C18.7215 8.73346 20.0024 8.73346 20.7925 9.52349"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2026 5.91236C15.4191 7.12884 15.4191 9.10115 14.2026 10.3176C12.9862 11.5341 11.0139 11.5341 9.79737 10.3176C8.58089 9.10116 8.58089 7.12885 9.79737 5.91236C11.0138 4.69588 12.9862 4.69588 14.2026 5.91236"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.06846 9.52349C6.85849 10.3135 6.85849 11.5944 6.06846 12.3844C5.27843 13.1745 3.99754 13.1745 3.20751 12.3844C2.41748 11.5944 2.41748 10.3135 3.20751 9.52349C3.99754 8.73346 5.27843 8.73346 6.06846 9.52349"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 19V17.904C23 16.523 21.881 15.404 20.5 15.404H19.699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 19V17.904C1 16.523 2.119 15.404 3.5 15.404H4.301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.339 19V17.399C17.339 15.466 15.772 13.899 13.839 13.899H10.16C8.22703 13.899 6.66003 15.466 6.66003 17.399V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

Team.defaultProps = SVGDefaultProps;
