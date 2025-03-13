import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.896 37.5L8.02 25.625l2.969-2.969 8.906 8.907L39.01 12.448l2.97 2.969L19.895 37.5z"
        fill="#54EE13"
      />
    </Svg>
  );
}

export default SvgComponent;
