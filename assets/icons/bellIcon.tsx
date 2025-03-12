import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill="#000" clipPath="url(#clip0_2013_1670)">
        <Path d="M7.63 17.613l-.001.016a2.371 2.371 0 004.742 0v-.016H7.629zM17.571 14.649l-2.134-3.135V7.603a5.438 5.438 0 00-4.37-5.332V1.066a1.066 1.066 0 00-2.133 0v1.205a5.438 5.438 0 00-4.37 5.332v3.91L2.428 14.65a1.078 1.078 0 00.891 1.685h13.36a1.078 1.078 0 00.891-1.685z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2013_1670">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
