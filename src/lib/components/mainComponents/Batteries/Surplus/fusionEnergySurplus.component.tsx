'use client';
import React from 'react';
import { Col, Row, Grid } from 'antd';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import Image from 'next/image';
import { Images } from '@/assets/image';
import styles from './fusionEnergySurplus.module.css';
const { useBreakpoint } = Grid;
interface PROPS {}
const Surplus: React.FC<PROPS> = () => {
    const screens = useBreakpoint();
    return (
        <main className={styles.fusionEnergyBakerFieldMain}>
            <section className={styles.fusionEnergyBakerFieldMaainSection}>
                <p className={styles.fusionEnergyBakerFieldTextStyle}>
                    PROCESS AND THE SOLUTIONS WE CAN PROVIDE
                </p>
                <hr className={styles.fusionEnergyBakerFieldHrStyle} />
                <h2 className={styles.fusionEnergyBakerFieldTitle}>
                    STORE SURPLUS ENERGY WITH A
                </h2>
            </section>
            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} md={{ span: 10, order: 1 }}>
                        <div>
                            <div
                                className={styles.fusionEnergySurplusSmallTitle}
                            >
                                Enphase IQ Battery When The Sun sets, it Shines
                            </div>
                            <p
                                className={
                                    styles.fusionEnergyBakerFieldDescription
                                }
                            >
                                The price of electricity remains steady for
                                standard electricity plans, utility companies
                                are increasingly offering time-of-use plans,
                                which charge more for electricity during peak
                                hours but offer cheaper service during off-peak
                                times -- which means you can actually save money
                                by running appliances like your dishwasher or
                                washing machine during off hours.
                            </p>
                            {/* <FusionEnergyButton label="Schedule Consultation" /> */}
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '1rem',
                                }}
                            >
                                <Image
                                    src={Images.FuzionColorLogo}
                                    alt="Fuzion Energy"
                                />
                                <Image
                                    src={Images.EnphaseImage}
                                    alt="Enphase"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24} md={{ span: 11, order: 2 }}>
                        <Image
                            src="/HomeService.svg"
                            alt="HomeService"
                            width={screens.md ? 550 : 350}
                            height={370}
                        />
                    </Col>
                </Row>
            </section>

            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} order={2} md={{ span: 11, order: 1 }}>
                        <Image
                            src="/HomeService.svg"
                            alt="HomeService"
                            width={screens.md ? 550 : 350}
                            height={370}
                        />
                    </Col>
                    <Col span={24} order={1} md={{ span: 10, order: 2 }}>
                        <div className={styles.fusionEnergySurplusSmallTitle}>
                            HOME Batteries
                        </div>
                        <p className={styles.fusionEnergyBakerFieldDescription}>
                            A home battery can store surplus energy generated
                            from rooftop photovoltaic panels for use when
                            needed. When the sun has set, energy demand is high,
                            or there is a black-out, you can use the energy
                            stored in your home battery to meet your energy
                            needs at no extra cost. In addition, a home battery
                            helps you pursue the goal of energy self-consumption
                            and ultimately energy-independence.
                        </p>
                        <FusionEnergyButton label="Buy Now" />
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default Surplus;
