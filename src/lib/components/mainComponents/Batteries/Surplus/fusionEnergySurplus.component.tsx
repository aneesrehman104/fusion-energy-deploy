import React from 'react';
import { Col, Row } from 'antd';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import Image from 'next/image';
import { Images } from '@/assets/image';
import styles from './fusionEnergySurplus.module.css';
interface PROPS {}
const Surplus: React.FC<PROPS> = () => {
    return (
        <main className={styles.fusionEnergySurplusMain}>
            <section className={styles.fusionEnergySurplusMaainSection}>
                <p className={styles.fusionEnergySurplusTextStyle}>
                    PROCESS AND THE SOLUTIONS WE CAN PROVIDE
                </p>
                <hr className={styles.fusionEnergySurplusHrStyle} />
                <h2 className={styles.fusionEnergySurplusTitle}>
                    Store Surplus Energy with a Home Battery
                </h2>
            </section>
            <section className={styles.fusionEnergyBakerSectionGap}>
                <Row justify="space-around" align="middle">
                    <Col span={24} md={{ span: 10, order: 1 }}>
                        <div className={styles.fusionEnergyBakerInnerDiv}>
                            <div
                                className={styles.fusionEnergySurplusSmallTitle}
                            >
                                Enphase IQ Battery When The Sun sets, it Shines
                            </div>
                            <p
                                className={
                                    styles.fusionEnergySurplusDescription
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
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '1rem',
                                }}
                            >
                                <Image
                                    src={Images.FuzionColorLogo}
                                    alt="Fuzion Energy"
                                    loading="eager"
                                />
                                <Image
                                    src={Images.EnphaseImage}
                                    alt="Enphase"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24} md={{ span: 11, order: 2 }}>
                        <Image
                            src={'/FuzionEnergyBatterisIQ.svg'}
                            alt="HomeService"
                            height={270}
                            width={270}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            loading="eager"
                        />
                    </Col>
                </Row>
            </section>

            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} order={2} md={{ span: 11, order: 1 }}>
                        <Image
                            src={'/FuzionEnergyHomeBatteries.svg'}
                            alt="HomeService"
                            height={270}
                            width={270}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            loading="eager"
                        />
                    </Col>
                    <Col span={24} order={1} md={{ span: 10, order: 2 }}>
                        <div className={styles.fusionEnergyBakerInnerDiv}>
                            <div
                                className={styles.fusionEnergySurplusSmallTitle}
                            >
                                HOME Batteries
                            </div>
                            <p
                                className={
                                    styles.fusionEnergySurplusDescription
                                }
                            >
                                A home battery can store surplus energy
                                generated from rooftop photovoltaic panels for
                                use when needed. When the sun has set, energy
                                demand is high, or there is a black-out, you can
                                use the energy stored in your home battery to
                                meet your energy needs at no extra cost. In
                                addition, a home battery helps you pursue the
                                goal of energy self-consumption and ultimately
                                energy-independence.
                            </p>
                            <FusionEnergyButton label="Buy Now" />
                        </div>
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default Surplus;
