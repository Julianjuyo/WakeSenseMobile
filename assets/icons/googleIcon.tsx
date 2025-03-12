import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24 15.22c0-.62-.06-1.26-.16-1.86h-8.66v3.54h4.96c-.2 1.14-.86 2.14-1.84 2.78l2.96 2.3C23 20.36 24 18 24 15.22z"
        fill="#4280EF"
      />
      <Path
        d="M15.18 24.18c2.48 0 4.56-.82 6.08-2.22l-2.96-2.28c-.82.56-1.88.88-3.12.88-2.4 0-4.42-1.62-5.16-3.78l-3.04 2.34a9.17 9.17 0 008.2 5.06z"
        fill="#34A353"
      />
      <Path
        d="M10.02 16.76a5.577 5.577 0 010-3.52l-3.04-2.36c-1.3 2.6-1.3 5.66 0 8.24l3.04-2.36z"
        fill="#F6B704"
      />
      <Path
        d="M15.18 9.46c1.3-.02 2.58.48 3.52 1.38l2.62-2.64a8.835 8.835 0 00-6.14-2.38 9.17 9.17 0 00-8.2 5.06l3.04 2.36c.74-2.18 2.76-3.78 5.16-3.78z"
        fill="#E54335"
      />
    </Svg>
  );
}

export default SvgComponent;
