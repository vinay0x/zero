import React from 'react';
import SVG, { SVGDefaultProps, SVGProps } from './SVG';

export default function Profile(props: SVGProps) {
  return (
    <SVG width={props.width} height={props.height} className={props.className}>
      <path
        d="M17.763 18.91L17.413 18.031C17.236 17.585 16.961 17.185 16.609 16.859L16.545 16.8C15.991 16.286 15.263 16 14.507 16H9.49296C8.73696 16 8.00896 16.286 7.45396 16.799L7.38996 16.859C7.03796 17.185 6.76396 17.585 6.58596 18.031L6.23596 18.91"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4749 7.44713C15.8417 8.81397 15.8417 11.03 14.4749 12.3969C13.108 13.7637 10.892 13.7637 9.52513 12.3969C8.15829 11.03 8.15829 8.81397 9.52513 7.44713C10.892 6.08029 13.108 6.08029 14.4749 7.44713"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604"
        stroke="currentColor"
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

Profile.defaultProps = SVGDefaultProps;
