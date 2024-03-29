'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Row, Col, Grid, Drawer } from 'antd';
import type { MenuProps } from 'antd';
import { FusionEnergyButton } from '../../commonComponents';
import { Images } from '@/assets/image';
import { CloseCircleOutlined } from '@ant-design/icons';
import NavbarItem from '../NavbarItem/NavbarItem.component';
import ExpandMenu from '../ExpandMenu';
import styles from './Navbar.module.css';

const { useBreakpoint } = Grid;

export default function Navbar() {
    const screens = useBreakpoint();
    const router = useRouter();
    const pathname = usePathname();

    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const items: MenuProps['items'] = [
        {
            label: 'Services',
            key: '/services',
            className: styles.menuItemDesktop,
            onMouseEnter: function () {
                setIsExpanded(true);
            },
        },
        {
            label: 'Why Fuzion',
            key: '/why_fuzion',
            onMouseEnter: function () {
                setIsExpanded(false);
            },
            onClick: function (e) {
                router.push(e.key);
            },
            children: [
                {
                    label: 'About us',
                    key: '/about',
                    className: styles.subMenuChildDesktop,
                    onClick: function (e) {
                        router.push(e.key);
                    },
                },
                {
                    label: 'Testimonial',
                    key: '/testimonial',
                    className: styles.subMenuChildDesktop,
                    onClick: function (e) {
                        router.push(e.key);
                    },
                },
                {
                    label: 'Gallery',
                    key: '/gallery',
                    className: styles.subMenuChildDesktop,
                    onClick: function (e) {
                        router.push(e.key);
                    },
                },
                {
                    label: 'Get to Know Efficiency – Helpful Articles',
                    key: '/article',
                    className: styles.subMenuChildDesktop,
                    onClick: function (e) {
                        router.push(e.key);
                    },
                },
            ],
        },
        {
            label: 'Giving Back',
            key: '/giving_back',
            className: styles.menuItemDesktop,
            onMouseEnter: function () {
                setIsExpanded(false);
            },
            onClick: function (e) {
                router.push(e.key);
            },
        },
        {
            label: 'Careers',
            key: '/careers',
            className: styles.menuItemDesktop,
            onMouseEnter: function () {
                setIsExpanded(false);
            },
            onClick: function (e) {
                router.push(e.key);
            },
        },
        {
            label: 'Referrals',
            key: '/referrals',
            className: styles.menuItemDesktop,
            onMouseEnter: function () {
                setIsExpanded(false);
            },
            onClick: function (e) {
                router.push(e.key);
            },
        },
        {
            label: 'Contact',
            key: '/contact_us',
            className: styles.menuItemDesktop,
            onMouseEnter: function () {
                setIsExpanded(false);
            },
            onClick: function (e) {
                router.push(e.key);
            },
        },
    ];

    const nav: MenuProps['items'] = [
        {
            label: 'Services',
            key: '/services',
            children: [
                {
                    label: 'Solar Solutions',
                    key: 'solar',
                    children: [
                        {
                            label: 'Residentials',
                            key: '/service/residential',
                            onClick: function (e) {
                                router.push(e.key);
                            },
                        },
                        {
                            label: 'Commercials',
                            key: '/service/commercial',
                            onClick: function (e) {
                                router.push(e.key);
                            },
                        },
                        {
                            label: 'Batteries',
                            key: '/service/batteries',
                            onClick: function (e) {
                                router.push(e.key);
                            },
                        },
                    ],
                },
                {
                    label: 'Turf-Landscape Efficiency',
                    key: 'turf',
                    children: [
                        {
                            label: 'Turf',
                            key: '/service/turf',
                            onClick: function (e) {
                                router.push(e.key);
                            },
                        },
                    ],
                },
                {
                    label: 'HVAC- Beat the Heat',
                    key: 'hvac',
                    children: [
                        {
                            label: 'HVAC',
                            key: '/service/hvac',
                            onClick: function (e) {
                                router.push(e.key);
                            },
                        },
                    ],
                },
                {
                    label: 'Generators- Keep the Power On',
                    key: 'generator',
                    children: [
                        {
                            label: 'Generators',
                            key: '/service/generator',
                            onClick: function (e) {
                                router.push(e.key);
                            },
                        },
                    ],
                },
            ],
        },
        {
            label: 'Why Fuzion',
            key: '/why_fuzion',
            children: [
                {
                    label: 'About us',
                    key: '/about',
                    onClick: function (e) {
                        router.push(e.key);
                    },
                },
                {
                    label: 'Testimonial',
                    key: '/testimonial',
                    onClick: function (e) {
                        router.push(e.key);
                    },
                },
                {
                    label: 'Gallery',
                    key: '/gallery',
                    onClick: function (e) {
                        router.push(e.key);
                    },
                },
                {
                    label: 'Get to Know Efficiency – Helpful Articles',
                    key: '/article',
                    onClick: function (e) {
                        router.push(e.key);
                    },
                },
            ],
        },
        {
            label: 'Giving Back',
            key: '/giving_back',
            onClick: function (e) {
                router.push(e.key);
            },
        },
        {
            label: 'Careers',
            key: '/careers',
            onClick: function (e) {
                router.push(e.key);
            },
        },
        {
            label: 'Referrals',
            key: '/referrals',
            onClick: function (e) {
                router.push(e.key);
            },
        },
        {
            label: 'Contact',
            key: '/contact_us',
            onClick: function (e) {
                router.push(e.key);
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
                                src={'/AppLogo.svg'}
                                alt="fusion-energy-logo"
                                loading="eager"
                                height={42}
                                width={174}
                            />
                        </Col>
                        <Col>
                            <Image
                                src={Images.MenuButton}
                                alt="MenuButton"
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
                                    loading="eager"
                                />
                            </Link>
                        </Col>
                        <Col md={14}>
                            <NavbarItem
                                current={pathname}
                                items={items}
                                mode="horizontal"
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
            {!screens.lg && (
                <Drawer
                    open={isOpenDrawer}
                    closable={false}
                    title={<Image src={Images.AppLogo} alt="applogo" />}
                    extra={
                        <CloseCircleOutlined
                            onClick={drawerHandle}
                            style={{ fontSize: 24 }}
                        />
                    }
                    footer={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <FusionEnergyButton label={'Get Estimates'} />
                        </div>
                    }
                >
                    <NavbarItem current={pathname} items={nav} mode="inline" />
                </Drawer>
            )}

            <ExpandMenu
                isDesktop={screens.lg!}
                isExpand={isExpanded}
                onClose={setIsExpanded}
            />
        </React.Fragment>
    );
}
