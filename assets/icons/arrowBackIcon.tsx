import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgComponentProps } from '.';

function SvgComponent({
  width = 50,
  height = 50,
  color = '#121212',
  ...props
}: SvgComponentProps & { color?: string }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M7.825 13l5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
