'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Row, Col, Grid, Drawer, MenuProps } from 'antd';
import { FusionEnergyButton } from '../../commonComponents';
import { Images } from '@/assets/image';
import { MenuOutlined } from '@ant-design/icons';
import NavbarItem from '../NavbarItem/NavbarItem';
import styles from './Navbar.module.css';
import ExpandMenu from '../ExpandMenu';

const { useBreakpoint } = Grid;

const items: MenuProps['items'] = [
    {
        label: 'Services',
        key: 'services',
        onMouseEnter: function () {
            return true;
        },
    },
    {
        label: 'Why Fuzion',
        key: 'why_fuzion',
        onMouseEnter: function () {
            return false;
        },
    },
    {
        label: 'Giving Back',
        key: 'giving_back',
        onMouseEnter: function () {
            return false;
        },
    },
    {
        label: 'Careers',
        key: 'careers',
        onMouseEnter: function () {
            return false;
        },
    },
    {
        label: 'Referrals',
        key: 'referrals',
        onMouseEnter: function () {
            return false;
        },
    },
    {
        label: 'Contact',
        key: 'contact',
        onMouseEnter: function () {
            return false;
        },
    },
];

export default function Navbar() {
    const screens = useBreakpoint();

    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [navbar, setNavbar] = useState<string>('solar');

    const drawerHandle = (): void => {
        setIsOpenDrawer(!isOpenDrawer);
    };

    const onItemSelect = (path: string): void => {
        setNavbar(path);
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
                            <Image
                                src={Images.AppLogo}
                                alt="fusion-energy-logo"
                            />
                        </Col>
                        <Col md={14}>
                            <NavbarItem
                                items={items}
                                mode="horizontal"
                                callback={(param: boolean) => {
                                    setIsExpanded(param);
                                }}
                            />
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
                <NavbarItem
                    items={items}
                    mode="vertical"
                    callback={(param) => {}}
                />
            </Drawer>

            <ExpandMenu
                isDesktop
                isExpand={isExpanded}
                onClose={setIsExpanded}
            />
        </React.Fragment>
    );
}
