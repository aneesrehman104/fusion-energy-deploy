import React from 'react';
import Image from 'next/image';
import { Col, Divider, Row } from 'antd';
import Link from 'next/link';
import { navbarJson, menus } from '@/utils/mock';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import styles from './ExpandMenu.module.css';
type Props = {
    isDesktop: boolean;
    isExpand: boolean;
    onClose: (param: boolean) => void;
};

const ExpandMenu: React.FC<Props> = ({ isDesktop, isExpand, onClose }) => {
    const [navbar, setNavbar] = React.useState<string>('solar');

    const onItemSelect = (path: string): void => {
        setNavbar(path);
    };

    return isExpand && isDesktop ? (
        <main
            className={styles.expandContainer}
            onMouseLeave={() => onClose(false)}
        >
            <div
                className={styles.expandWrapper}
                onMouseLeave={() => onClose(false)}
            >
                <Row
                    align={'middle'}
                    style={{
                        height: '100%',
                        paddingLeft: '3em',
                        paddingRight: '3em',
                    }}
                >
                    <Col span={5}>
                        <div className={styles.sideMenuWrapper}>
                            {menus.map((menu, index) => (
                                <a
                                    href="#"
                                    className={
                                        menu.key === navbar
                                            ? styles.sideMenuActive
                                            : styles.sideMenuUnselected
                                    }
                                    onClick={() => onItemSelect(menu.key)}
                                    key={index}
                                >
                                    {menu.heading}
                                </a>
                            ))}
                        </div>
                    </Col>
                    <Col span={1}>
                        <div className={styles.dividerWrapper}>
                            <Divider
                                type="vertical"
                                style={{
                                    borderWidth: '1px',
                                    opacity: 0.43,
                                    borderColor: 'rgba(95, 123, 151, 1)',
                                    height: '285.685px',
                                }}
                            />
                        </div>
                    </Col>
                    <Col span={18}>
                        <Row align={'top'}>
                            {navbarJson[
                                navbar as keyof typeof navbarJson
                            ].items.map((item: any, index: number) => {
                                return (
                                    <Col span={8} key={index}>
                                        <div className={styles.menuCardWrapper}>
                                            <Image
                                                src={item.image}
                                                alt={`Fuzion-Energy-${item.heading}`}
                                                className={styles.menuImage}
                                                loading="eager"
                                            />
                                            <Link
                                                href={item.path}
                                                className={
                                                    styles.menuCardHeading
                                                }
                                            >
                                                {item.heading}
                                            </Link>
                                            {item.subHeading !== '' ? (
                                                <u
                                                    className={
                                                        styles.menuCardSubHeading
                                                    }
                                                >
                                                    {item.subHeading}
                                                </u>
                                            ) : (
                                                <FusionEnergyButton label="Save Your Power" />
                                            )}
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </div>
        </main>
    ) : null;
};

export default ExpandMenu;
