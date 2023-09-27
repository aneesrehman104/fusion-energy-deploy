import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import type { MenuProps } from 'antd';
type Props = {
    items: MenuProps['items'];
    mode: MenuProps['mode'];
    current: string;
};

const MenuItem: React.FC<Props> = ({ current, items, mode }: Props) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemBg: '',
                        itemColor: mode === 'horizontal' ? '#fff' : '#000',
                        itemSelectedColor:
                            mode === 'horizontal' ? '#fff' : '#000',
                        itemSelectedBg: '#fff',
                        itemHoverColor: mode === 'horizontal' ? '#fff' : '#000',
                        horizontalItemSelectedColor:
                            mode === 'horizontal' ? '#fff' : '#000',
                        horizontalItemHoverColor:
                            mode === 'horizontal' ? '#fff' : '#000',
                        horizontalLineHeight: 2,
                    },
                },
            }}
        >
            <Menu
                mode={mode}
                selectedKeys={[current]}
                defaultOpenKeys={['solar']}
                style={{ borderBottom: 'none' }}
                items={items}
            />
        </ConfigProvider>
    );
};

export default MenuItem;
