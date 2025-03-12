import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_96_748)">
        <Path
          d="M23.26 6.5c0-1.192-.952-2.167-2.115-2.167H4.23c-1.163 0-2.114.975-2.114 2.167m21.145 0v13c0 1.192-.952 2.167-2.115 2.167H4.23c-1.163 0-2.114-.975-2.114-2.167v-13m21.145 0l-10.573 7.583L2.115 6.5"
          stroke="#4B1F9A"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_96_748">
          <Path fill="#fff" d="M0 0H25.3742V26H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
