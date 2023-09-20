import React from 'react';
import { Dropdown } from 'antd';
import type { DropdownProps, MenuProps } from 'antd';

type Props = {
    children: React.ReactNode;
    trigger: DropdownProps['trigger'];
    showArrow?: boolean;
    items: MenuProps['items'];
};

export default function DropdownBtn({
    children,
    trigger,
    showArrow = true,
    items,
}: Props) {
    return (
        <Dropdown arrow={showArrow} menu={{ items }} trigger={trigger}>
            {children}
        </Dropdown>
    );
}
