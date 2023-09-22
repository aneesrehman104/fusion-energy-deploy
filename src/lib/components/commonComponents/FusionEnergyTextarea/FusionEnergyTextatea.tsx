'use client';
import React from 'react';
import { ConfigProvider, Input } from 'antd';
import styles from './FusionEnergyTextarea.module.css';
type Props = { placeholder: string };

const FusionEnergyTextatea: React.FC<Props> = ({ placeholder }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        colorPrimaryActive: '',
                        colorPrimary: '',
                        colorPrimaryHover: '',
                        borderRadius: 10,
                    },
                },
            }}
        >
            <Input.TextArea
                rows={5}
                placeholder={placeholder}
                className={styles.fusionEnergyTextarea}
            />
            <p className={styles.fusionEnergyTextareaFeedback}>
                Max Characters Allowed 250.
            </p>
        </ConfigProvider>
    );
};

export default FusionEnergyTextatea;
