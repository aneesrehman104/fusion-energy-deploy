import React from 'react';
import Image from 'next/image';
import { Col, Divider, Row } from 'antd';
import { Images } from '@/assets/image';
import { navbarJson, menus } from '@/utils/mock';
import { FusionEnergyButton } from '../../commonComponents';
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

    return (
        isExpand &&
        isDesktop && (
            <main
                className={styles.expandContainer}
                onMouseLeave={() => onClose(false)}
            >
                <div
                    className={styles.expandWrapper}
                    onMouseLeave={() => onClose(false)}
                >
                    <Row align={'middle'}>
                        <Col span={5}>
                            <div className={styles.sideMenuWrapper}>
                                {menus.map((menu, index) => (
                                    <a
                                        href="#"
                                        className={styles.sideMenuUnselected}
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
                                <Divider type="vertical" />
                            </div>
                        </Col>
                        <Col span={18}>
                            <Row>
                                {navbarJson[
                                    navbar as keyof typeof navbarJson
                                ].items.map((item: any, index: number) => {
                                    return (
                                        <Col span={8} key={index}>
                                            <div
                                                className={
                                                    styles.menuCardWrapper
                                                }
                                            >
                                                <Image
                                                    src={
                                                        Images.ResidentialImage
                                                    }
                                                    alt="ResidentialImage"
                                                    className={styles.menuImage}
                                                />
                                                <p
                                                    className={
                                                        styles.menuCardHeading
                                                    }
                                                >
                                                    {item.heading}
                                                </p>
                                                {item.subHeading !== '' ? (
                                                    <u
                                                        className={
                                                            styles.menuCardSubHeading
                                                        }
                                                    >
                                                        {item.subHeading}
                                                    </u>
                                                ) : (
                                                    <FusionEnergyButton
                                                        label="Save Your Power"
                                                        width="9rem"
                                                    />
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
        )
    );
};

export default ExpandMenu;
