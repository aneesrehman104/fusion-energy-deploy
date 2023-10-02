import React from 'react';
import { ConfigProvider, Input } from 'antd';
import AntdStyledComponentsRegistry from '@/utils/AntdStyledComponentsRegistry';
import { FusionEnergyInputProps } from '@/lib/ts/interface';
import styles from './FusionEnergyInput.module.css';

const FusionEnergyInput: React.FC<FusionEnergyInputProps> = ({
    placeholder,
    type,
    onChange,
    name,
    value,
}) => {
    return (
        <AntdStyledComponentsRegistry>
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            colorPrimaryActive: '',
                            colorPrimary: '',
                            colorPrimaryHover: '',
                            borderRadius: 10,
                            fontFamily: '',
                        },
                    },
                }}
            >
                <Input
                    placeholder={placeholder}
                    size="large"
                    type={type}
                    className={styles.fusionEnergyInput}
                    onChange={onChange}
                    value={value}
                    name={name}
                />
            </ConfigProvider>
        </AntdStyledComponentsRegistry>
    );
};

export default FusionEnergyInput;
