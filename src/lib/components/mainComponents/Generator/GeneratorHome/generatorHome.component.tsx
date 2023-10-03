'use client';
import React from 'react';
import { Col, Row, Grid } from 'antd';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import Image from 'next/image';
import styles from './fusionEnergyGeneratorHome.module.css';
import { Images } from '@/assets/image';
const { useBreakpoint } = Grid;
interface PROPS {}
const GeneratorHome: React.FC<PROPS> = () => {
    const screens = useBreakpoint();

    return (
        <main className={styles.fusionEnergyGeneratorHomeMain}>
            <section className={styles.fusionEnergyGeneratorHomeMaainSection}>
                <p className={styles.fusionEnergyGeneratorHomeTextStyle}>
                    PROCESS AND THE SOLUTIONS WE CAN PROVIDE
                </p>
                <hr className={styles.fusionEnergyGeneratorHomeHrStyle} />
                <h2 className={styles.fusionEnergyGeneratorHomeTitle}>
                    Home Backup Power With Generac Generators
                </h2>
            </section>
            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} md={{ span: 10, order: 1 }}>
                        <div className={styles.fusionEnergyBakerInnerDiv}>
                            <div
                                className={
                                    styles.fusionEnergyGeneratorHomeSmallTitle
                                }
                            >
                                Home backup generators
                            </div>
                            <p
                                className={
                                    styles.fusionEnergyGeneratorHomeDescription
                                }
                            >
                                Get comfort, security, and convenience with a
                                Generac Home Generator. Your Generac home backup
                                generator runs on your existing natural gas or
                                LP fuel supply to power your home directly. And
                                no need to worry about being there to turn your
                                generator on or off because it does that for you
                                automatically. Plus, you can monitor the status
                                of your generator, including operating status
                                and maintenance alerts, right from your
                                smarthpone or tablet.
                            </p>
                            <FusionEnergyButton label="Buy Now" />
                        </div>
                    </Col>
                    <Col span={24} order={2} md={{ span: 11, order: 2 }}>
                        <Image
                            src={Images.GeneratorContent}
                            // src="/HomeService.png"
                            alt="HomeService"
                            // width={screens.md ? 600 : 360}
                            // height={370}
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

export default GeneratorHome;
