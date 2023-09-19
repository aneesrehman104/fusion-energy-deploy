import React from 'react';

import { ConfigProvider, Menu } from 'antd';
import type { MenuProps } from 'antd';

type Props = {
    items: MenuProps['items'];
};

export default function MenuItem({ items }: Props) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemBg: '',
                        itemColor: '#fff',
                        itemHoverColor: '#fff',
                        horizontalItemSelectedColor: '#fff',
                        horizontalItemHoverColor: '#fff',
                        horizontalLineHeight: 2,
                        dropdownWidth: 780,
                    },
                },
            }}
        >
            <Menu items={items} mode="horizontal" />
        </ConfigProvider>
    );
}
