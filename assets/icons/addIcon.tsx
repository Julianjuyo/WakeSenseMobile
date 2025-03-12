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
      <Path d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6z" fill="#1D1B20" />
    </Svg>
  );
}

export default SvgComponent;
