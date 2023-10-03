import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './MenuItem.module.css';
type Props = {
    items: MenuProps['items'];
    mode: MenuProps['mode'];
    current: string;
};

const MenuItem: React.FC<Props> = ({ current, items, mode }: Props) => {
    const selectedKeys = current.includes('/service') ? '/services' : current;
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemBg: '',
                        itemColor: mode === 'inline' ? '#000' : '#fff',
                        itemSelectedColor: mode === 'inline' ? '#000' : '#fff',
                        // itemHoverColor:
                        //     mode === 'inline'
                        //         ? '#fff'
                        //         : mode === 'horizontal'
                        //         ? '#fff'
                        //         : '',

                        horizontalItemSelectedColor:
                            mode === 'horizontal' ? '#fff' : '#000',
                        horizontalLineHeight: 2,
                    },
                },
            }}
        >
            <Menu
                mode={mode}
                selectedKeys={[selectedKeys]}
                defaultOpenKeys={['solar']}
                style={{ borderBottom: 'none' }}
                items={items}
                className={styles.custom_menu_item}
            />
        </ConfigProvider>
    );
};

export default MenuItem;
