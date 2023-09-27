import type { MenuProps } from 'antd';
import React from 'react';
import MenuItem from '../../commonComponents/MenuItem/MenuItem.component';
type Props = {
    items: MenuProps['items'];
    mode: MenuProps['mode'];
};

export default function NavbarItem({ items, mode }: Props) {
    return <MenuItem items={items} mode={mode} />;
}
