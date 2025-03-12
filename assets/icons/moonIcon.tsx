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
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <Path
        d="M54.664 53.617c-7.793 7.8-20.481 7.8-28.28 0-7.8-7.8-7.8-20.488 0-28.284 2.063-2.06 4.58-3.633 7.473-4.659a2.498 2.498 0 012.598.593 2.49 2.49 0 01.592 2.598c-1.96 5.527-.625 11.51 3.477 15.612 4.095 4.098 10.078 5.43 15.612 3.476a2.49 2.49 0 012.597.593c.684.677.912 1.69.59 2.598-1.02 2.893-2.595 5.41-4.659 7.473zm-24.746-24.75c-5.85 5.85-5.85 15.369 0 21.215 6.25 6.253 16.895 5.69 22.344-1.276-5.619.351-11.152-1.677-15.273-5.795-4.121-4.117-6.146-9.651-5.795-15.27-.449.352-.875.727-1.276 1.127z"
        fill="#D15A5A"
      />
    </Svg>
  );
}

export default SvgComponent;
