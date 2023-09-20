import React from 'react';
import { Button, ConfigProvider, Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd';
import DropdownBtn from '../Dropdown/Dropdown';

type Props = {
    items: MenuProps['items'];
    mode: MenuProps['mode'];
};

export default function MenuItem({ items, mode }: Props) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemBg: '',
                        itemColor: mode === 'horizontal' ? '#fff' : '#000',
                        itemHoverColor: '#fff',
                        horizontalItemSelectedColor: '#fff',
                        horizontalItemHoverColor: '#fff',
                        horizontalLineHeight: 2,
                        dropdownWidth: 780,
                    },
                },
            }}
        >
            <Menu mode={mode} style={{ borderBottom: 'none' }}>
                {items?.map((item: any, index) => (
                    <Menu.Item key={item.key}>
                        {Array.isArray(item.children) ? (
                            <DropdownBtn
                                trigger={['hover']}
                                items={item.children}
                            >
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                borderColorDisabled: '',
                                                defaultBg: '',
                                                defaultBorderColor: '',
                                                defaultColor: '#fff',
                                                colorPrimaryHover: '',
                                                colorPrimaryActive: '',
                                            },
                                        },
                                    }}
                                >
                                    <Button>{item.label}</Button>
                                </ConfigProvider>
                            </DropdownBtn>
                        ) : (
                            item.label
                        )}
                    </Menu.Item>
                ))}
            </Menu>
        </ConfigProvider>
    );
}
