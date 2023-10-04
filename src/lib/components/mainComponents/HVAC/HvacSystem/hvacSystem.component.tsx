'use client';
import React from 'react';
import { Col, Row, Grid } from 'antd';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import Image from 'next/image';
import styles from './fusionEnergyHvacSystem.module.css';
import { Images } from '@/assets/image';
const { useBreakpoint } = Grid;
interface PROPS {}
const HvacSystem: React.FC<PROPS> = () => {
    const screens = useBreakpoint();

    return (
        <main className={styles.fusionEnergyHvacSystemMain}>
            <section className={styles.fusionEnergyHvacSystemMaainSection}>
                <p className={styles.fusionEnergyHvacSystemTextStyle}>
                    PROCESS AND THE SOLUTIONS WE CAN PROVIDE
                </p>
                <hr className={styles.fusionEnergyHvacSystemHrStyle} />
                <h2 className={styles.fusionEnergyHvacSystemTitle}>
                    Bakersfields Most Affordable Solar Panels
                </h2>
            </section>
            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} md={{ span: 10, order: 1 }}>
                        <div className={styles.fusionEnergyBakerInnerDiv}>
                            <div
                                className={
                                    styles.fusionEnergyHvacSystemSmallTitle
                                }
                            >
                                HVAC system
                            </div>
                            <p
                                className={
                                    styles.fusionEnergyHvacSystemDescription
                                }
                            >
                                The purpose of your HVAC system is to provide
                                you with a comfortable environment even during
                                the most uncomfortable times such as winter and
                                summer. If your heating or cooling unit is not
                                doing its job, you need a qualified HVAC
                                technician to diagnose and repair the problem.
                                To ensure a trouble-free experience, and ensure
                                the high-level operating efficiency of your HVAC
                                system, call Fuzion Energy.
                            </p>
                            <FusionEnergyButton label="Buy Now" />
                        </div>
                    </Col>
                    <Col span={24} md={{ span: 11, order: 2 }}>
                        <Image
                            src={'/FuzionEnergyHvacSystem.svg'}
                            width={370}
                            height={370}
                            alt="HomeService"
                            loading="eager"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default HvacSystem;
