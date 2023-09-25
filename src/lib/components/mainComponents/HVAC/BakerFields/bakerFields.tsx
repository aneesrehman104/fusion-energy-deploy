import React from 'react';
import styles from './bakerFields.module.css';
import { Col, Row, Grid } from 'antd';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import Image from 'next/image';
import { Images } from '@/assets/image';

const { useBreakpoint } = Grid;

const BakerFields = () => {
    const screens = useBreakpoint();
    return (
        <main className={styles.bakerFieldsContainer}>
            <section className={styles.bakerFieldsHeadingWrapper}>
                <p className={styles.bakerFieldsSubheading}>
                    PROCESS AND THE SOLUTIONS WE CAN PROVIDE
                </p>
                <hr className={styles.bakerFieldsLine} />
                <h2 className={styles.bakerFieldsTitle}>
                    Comfort During Uncomfortable Times
                </h2>
            </section>
            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} md={{ span: 10, order: 1 }}>
                        <div>
                            <div
                                className={
                                    styles.fusionEnergyBakerFieldSmallTitle
                                }
                            >
                                HVAC System
                            </div>
                            <p className={styles.bakerFieldDescription}>
                                Looking for low-cost solar panel installation
                                without sacrificing efficiency and quality? When
                                it comes to making the choice on which panels to
                                buy and which installation company to partner
                                with, it is important to remember that the “most
                                affordable solar” does not necessarily mean the
                                “cheapest.” The ultimate goal is to choose the
                                right solar panels and array that match your
                                individual needs.
                            </p>
                            <FusionEnergyButton label="Buy Now" />
                        </div>
                    </Col>
                    <Col span={24} md={{ span: 10, order: 2 }}>
                        <div>
                            <Image
                                src={Images.HvacContentImage}
                                alt="HvacContentImage"
                                width={screens.md ? 550 : 350}
                                height={370}
                            />
                        </div>
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default BakerFields;
