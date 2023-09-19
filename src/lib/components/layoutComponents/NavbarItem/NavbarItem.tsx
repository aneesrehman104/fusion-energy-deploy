import { MenuProps } from 'antd';
import React from 'react';
import MenuItem from '../../commonComponents/MenuItem/MenuItem';

const items: MenuProps['items'] = [
    {
        label: 'Services',
        key: 'services',
        children: [{ label: 'umer', key: 'umer' }],
    },
    {
        label: 'Why Fuzion',
        key: 'why_fuzion',
    },
    {
        label: 'Giving Back',
        key: 'giving_back',
    },
    {
        label: 'Careers',
        key: 'careers',
    },
    {
        label: 'Referrals',
        key: 'referrals',
    },
    {
        label: 'Contact',
        key: 'contact',
    },
];

export default function NavbarItem() {
    return <MenuItem items={items} />;
}
