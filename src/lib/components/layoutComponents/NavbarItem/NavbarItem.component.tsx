import type { MenuProps } from 'antd';
import React from 'react';
import MenuItem from '../../commonComponents/MenuItem/MenuItem.component';
type Props = {
    current: string;
    items: MenuProps['items'];
    mode: MenuProps['mode'];
};

export default function NavbarItem({ current, items, mode }: Props) {
    return <MenuItem current={current} items={items} mode={mode} />;
}
