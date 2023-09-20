'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import { Row, Col, Grid, Drawer, MenuProps } from 'antd';

import styles from './Navbar.module.css';
import { Images } from '@/assets/image';
import { MenuOutlined } from '@ant-design/icons';
import NavbarItem from '../NavbarItem/NavbarItem';

const { useBreakpoint } = Grid;

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

export default function Navbar() {
    const screens = useBreakpoint();

    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    const drawerHandle = (): void => {
        setIsOpenDrawer(!isOpenDrawer);
    };

    return (
        <React.Fragment>
            {!screens.lg ? (
                <header className={styles.navbarMobileContainer}>
                    <Row align="middle" justify="space-between">
                        <Col>
                            <div className={styles.navItemCenter}>
                                <Image
                                    src={Images.AppLogo}
                                    alt="fusion-energy-logo"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className={styles.navItemCenter}>
                                <MenuOutlined
                                    className={styles.navMenu}
                                    onClick={drawerHandle}
                                />
                            </div>
                        </Col>
                    </Row>
                </header>
            ) : (
                <header className={styles.navbarContainer}>
                    <Row align="middle" justify="space-between">
                        <Col md={4}>
                            <div className={styles.navItemCenter}>
                                <Image
                                    src={Images.AppLogo}
                                    alt="fusion-energy-logo"
                                />
                            </div>
                        </Col>
                        <Col>
                            <NavbarItem items={items} mode="horizontal" />
                        </Col>
                        <Col md={4}>
                            <div className={styles.navItemCenter}>
                                <button>hally</button>
                            </div>
                        </Col>
                    </Row>
                </header>
            )}
            <Drawer
                open={isOpenDrawer}
                onClose={drawerHandle}
                title="Fusion Energy"
            >
                <NavbarItem items={items} mode="vertical" />
            </Drawer>
        </React.Fragment>
    );
}
