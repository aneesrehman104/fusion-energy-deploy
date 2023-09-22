import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import type { MenuProps } from 'antd';
type Props = {
    items: MenuProps['items'];
    mode: MenuProps['mode'];
    callback: (param: boolean) => void;
};

export default function MenuItem({ items, mode, callback }: Props) {
    const onMouseEnterHandle = (item: any) => {
        if (typeof item?.onMouseEnter !== 'function') return;
        callback(item?.onMouseEnter());
    };
    const onMouseLeaveHandle = (item: any) => {
        if (typeof item?.onMouseLeave !== 'function') return;
        callback(item?.onMouseLeave());
    };

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
                    },
                },
            }}
        >
            <Menu mode={mode} style={{ borderBottom: 'none' }}>
                {items?.map((item: any) => (
                    <Menu.Item
                        key={item.key}
                        onMouseEnter={() => onMouseEnterHandle(item)}
                        onMouseLeave={() => onMouseLeaveHandle(item)}
                        className={item.className}
                    >
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
        </ConfigProvider>
    );
}
