import React, { FC } from 'react';
import { Button } from 'antd';
import { FusionEnergyButtonProps } from '@/lib/ts/interface';
import styles from './fusionEnergyButton.module.css';

const FusionEnergyButton: FC<FusionEnergyButtonProps> = ({
    type,
    icon,
    loading,
    onClick,
    disabled,
    className,
    htmlType,
    color = '#fff',
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
            className={className ? className : styles.fusionEnergyButtonStyle}
            htmlType={htmlType}
            style={{
                color,
                backgroundColor,
                height,
                width,
                marginRight,
                marginLeft,
            }}
        >
            {label}
        </Button>
    );
};

export default FusionEnergyButton;
