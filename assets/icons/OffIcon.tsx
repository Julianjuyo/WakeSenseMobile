import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={70}
      height={40}
      viewBox="0 0 70 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background of the switch */}
      <Path
        d="M0 20C0 8.954 8.954 0 20 0h30c11.046 0 20 8.954 20 20s-8.954 20-20 20H20C8.954 40 0 31.046 0 20z"
        fill="#D15A5A"
      />

      {/* Larger & properly aligned toggle circle */}
      <Circle cx={20} cy={20} r={30} fill="#fff" />
    </Svg>
  );
}

export default SvgComponent;
