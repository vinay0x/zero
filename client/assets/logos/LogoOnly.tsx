import * as React from "react"

function LogoOnly(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32zm19.556-38.756c0 6.38-4.602 11.683-10.667 12.773v-10.64a4.267 4.267 0 00-4.267-4.266H25.774c1.018-6.152 6.363-10.844 12.804-10.844 7.167 0 12.978 5.81 12.978 12.977zM19.2 23.111h6.575a13.066 13.066 0 00-.175 2.133c0 7.168 5.81 12.978 12.978 12.978.789 0 1.56-.07 2.31-.205V44.8a4.267 4.267 0 01-4.266 4.267H19.2a4.267 4.267 0 01-4.267-4.267V27.378A4.267 4.267 0 0119.2 23.11z"
        fill="currentColor"
      />
    </svg>
  )
}

export default LogoOnly
