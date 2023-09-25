import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import type { MenuProps } from 'antd';
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
                    },
                },
            }}
        >
            <Menu mode={mode} style={{ borderBottom: 'none' }} items={items} />
        </ConfigProvider>
    );
}
