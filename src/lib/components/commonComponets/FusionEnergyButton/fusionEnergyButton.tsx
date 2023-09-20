import React, { FC } from "react";
import { Button } from "antd";
import "./fusionEnergyButton.css";
import { FusionEnergyButtonProps } from "@/lib/ts/interface";
const FusionEnergyButton: FC<FusionEnergyButtonProps> = ({
  type,
  icon,
  loading,
  onClick,
  disabled,
  className,
  htmlType,
  color,
  backgroundColor,
  label,
  height,
  width,
  marginRight,
  marginLeft,
}) => {
  return (
    <Button
      type={type}
      icon={icon}
      loading={loading}
      onClick={onClick}
      disabled={disabled}
      className={className ? className : "fusionEnergyButtonStyle"}
      htmlType={htmlType}
      style={{ color, backgroundColor, height, width, marginRight, marginLeft }}
    >
      {label}
    </Button>
  );
};

export default FusionEnergyButton;
