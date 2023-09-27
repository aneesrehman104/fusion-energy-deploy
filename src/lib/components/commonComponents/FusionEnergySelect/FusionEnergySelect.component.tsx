import React from 'react';
import { Select, ConfigProvider } from 'antd';
import styles from './FusionEnergySelect.module.css';
interface FusionEnergySelectProps {
    placeholder: string;
    value: string;
    options: any;
}

export default function FusionEnergySelect({
    placeholder,
    value,
    options,
}: FusionEnergySelectProps) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Select: {
                        colorPrimaryActive: '',
                        colorPrimary: '',
                        colorPrimaryHover: '',
                        borderRadius: 4,
                    },
                },
            }}
        >
            <Select
                defaultValue={value}
                className={styles.fusionEnergySelect}
                placeholder={placeholder}
                options={options}
            />
        </ConfigProvider>
    );
}
