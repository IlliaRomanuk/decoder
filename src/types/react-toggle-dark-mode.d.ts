declare module "react-toggle-dark-mode" {
  import * as React from "react";

  export interface DarkModeSwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: number;
    moonColor?: string;
    sunColor?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  export const DarkModeSwitch: React.FC<DarkModeSwitchProps>;
  export default DarkModeSwitch;
}