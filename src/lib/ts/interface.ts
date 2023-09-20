import React, { FC, ReactNode, MouseEvent } from "react";
export interface Props {
  selected_id?: string;
  handleLogout?: any;
  openModal?: any;
  hideModal?: any;
  children?: any;
  window?: () => Window;
}

export interface FusionEnergyButtonProps {
  type?: "primary" | "default" | "dashed" | "link" | "text";
  icon?: ReactNode;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  color?: string;
  height?:string;
  width?:string;
  backgroundColor?: string;
  label: ReactNode;
  marginRight?:string;
  marginLeft?:string;

}
