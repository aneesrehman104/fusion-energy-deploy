import type { MenuProps } from 'antd';
import React from 'react';
import MenuItem from '../../commonComponents/MenuItem/MenuItem';
type Props = {
    items: MenuProps['items'];
    mode: MenuProps['mode'];
    callback: (param: boolean) => void;
};

export default function NavbarItem({ items, mode, callback }: Props) {
    return <MenuItem items={items} mode={mode} callback={callback} />;
}
