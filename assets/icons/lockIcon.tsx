import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={27}
      height={24}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_25_666)">
        <Path
          d="M19.716 8h-1.09V6c0-2.76-2.443-5-5.452-5-3.01 0-5.451 2.24-5.451 5v2h-1.09c-1.2 0-2.181.9-2.181 2v10c0 1.1.98 2 2.18 2h13.084c1.2 0 2.18-.9 2.18-2V10c0-1.1-.98-2-2.18-2zm-6.542 9c-1.2 0-2.18-.9-2.18-2s.98-2 2.18-2c1.2 0 2.18.9 2.18 2s-.98 2-2.18 2zm3.38-9h-6.76V6c0-1.71 1.516-3.1 3.38-3.1 1.865 0 3.38 1.39 3.38 3.1v2z"
          fill="#4B1F9A"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_25_666">
          <Path fill="#fff" transform="translate(.09)" d="M0 0H26.1677V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
