import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.825 13l5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825z"
        fill="#121212"
      />
    </Svg>
  );
}

export default SvgComponent;
