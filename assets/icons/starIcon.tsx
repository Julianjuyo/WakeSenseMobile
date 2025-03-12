import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgComponentProps } from '.';

function SvgComponent({
  width = 80,
  height = 80,
  ...props
}: SvgComponentProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 75 70"
      fill="none"
      {...props}
    >
      <Path
        d="M37.5 0l8.644 26.603h27.972l-22.63 16.441 8.644 26.603L37.5 53.206 14.87 69.647l8.644-26.603L.884 26.603h27.972L37.5 0z"
        fill="#9162F2"
      />
    </Svg>
  );
}

export default SvgComponent;
