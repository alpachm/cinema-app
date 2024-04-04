import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MenuIcon = (props: SvgProps) => (
  <Svg width={32} height={16} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 8h30.5M1 15h15m0-14h15"
    />
  </Svg>
);
export default MenuIcon;
