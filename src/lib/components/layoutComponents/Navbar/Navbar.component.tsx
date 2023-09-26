'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Row, Col, Grid, Drawer } from 'antd';
import type { MenuProps } from 'antd';
import { FusionEnergyButton } from '../../commonComponents';
import { Images } from '@/assets/image';
import { MenuOutlined } from '@ant-design/icons';
import NavbarItem from '../NavbarItem/NavbarItem.component';
import ExpandMenu from '../ExpandMenu';
import styles from './Navbar.module.css';

const { useBreakpoint } = Grid;

export default function Navbar() {
    const screens = useBreakpoint();
    const router = useRouter();

    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const items: MenuProps['items'] = [
        {
            label: 'Services',
            key: 'services',
            onMouseEnter: function () {
                setIsExpanded(true);
            },
        },
        {
            label: 'Why Fuzion',
            key: 'about',
            onMouseEnter: function () {
                setIsExpanded(false);
            },
            onClick: function (e) {
                router.push(e.key);
            },
        },
        {
            label: 'Giving Back',
            key: 'giving_back',
            onMouseEnter: function () {
                setIsExpanded(false);
            },
        },
        {
            label: 'Careers',
            key: 'careers',
            onMouseEnter: function () {
                setIsExpanded(false);
            },
        },
        {
            label: 'Referrals',
            key: 'referrals',
            onMouseEnter: function () {
                setIsExpanded(false);
            },
        },
        {
            label: 'Contact',
            key: 'contact',
            onMouseEnter: function () {
                setIsExpanded(false);
            },
        },
    ];

    const drawerHandle = (): void => {
        setIsOpenDrawer(!isOpenDrawer);
    };

    return (
        <React.Fragment>
            {!screens.lg ? (
                <header className={styles.navbarMobileContainer}>
                    <Row align="middle" justify="space-between">
                        <Col>
                            <Image
                                src={Images.AppLogo}
                                alt="fusion-energy-logo"
                            />
                        </Col>
                        <Col>
                            <MenuOutlined
                                className={styles.navMenu}
                                onClick={drawerHandle}
                            />
                        </Col>
                    </Row>
                </header>
            ) : (
                <header className={styles.navbarContainer}>
                    <Row align="middle" justify="space-between">
                        <Col md={5}>
                            <Link href="/">
                                <Image
                                    src={Images.AppLogo}
                                    alt="fusion-energy-logo"
                                />
                            </Link>
                        </Col>
                        <Col md={14}>
                            <NavbarItem items={items} mode="horizontal" />
                        </Col>
                        <Col md={5}>
                            <FusionEnergyButton
                                label="Get Estimates"
                                color="#171A20"
                                backgroundColor="#FFFFFF"
                            />
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

            <ExpandMenu
                isDesktop={screens.lg!}
                isExpand={isExpanded}
                onClose={setIsExpanded}
            />
        </React.Fragment>
    );
}
