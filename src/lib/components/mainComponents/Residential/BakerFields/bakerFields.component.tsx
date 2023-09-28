'use client';
import React from 'react';
import { Col, Row, Grid } from 'antd';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import Image from 'next/image';
import styles from './fusionEnergyBakerFields.module.css';
import { Images } from '@/assets/image';
const { useBreakpoint } = Grid;
interface PROPS {}
const BakerFields: React.FC<PROPS> = () => {
    const screens = useBreakpoint();

    return (
        <main className={styles.fusionEnergyBakerFieldMain}>
            <section className={styles.fusionEnergyBakerFieldMaainSection}>
                <p className={styles.fusionEnergyBakerFieldTextStyle}>
                    PROCESS AND THE SOLUTIONS WE CAN PROVIDE
                </p>
                <hr className={styles.fusionEnergyBakerFieldHrStyle} />
                <h2 className={styles.fusionEnergyBakerFieldTitle}>
                    Bakersfield's Most Affordable Solar Panels
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
                                SOLAR FOR YOUR HOME
                            </div>
                            <p
                                className={
                                    styles.fusionEnergyBakerFieldDescription
                                }
                            >
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
                            <FusionEnergyButton label="Schedule Consultation" />
                        </div>
                    </Col>
                    <Col span={24} md={{ span: 11, order: 2 }}>
                        <div>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/H9fg7GFagF4?si=XqNysph-7qnBa1-P"
                                title="YouTube video player"
                                frameBorder="0"
                                style={{
                                    borderRadius: '5px',
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </section>

            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} order={2} md={{ span: 11, order: 1 }}>
                        <Image
                            src={Images.GeneratorContent}
                            // src="/HomeService.png"
                            alt="HomeService"
                            // width={screens.md ? 550 : 350}
                            // height={370}
                            loading="eager"
                        />
                    </Col>
                    <Col span={24} order={1} md={{ span: 10, order: 2 }}>
                        <div
                            className={styles.fusionEnergyBakerFieldSmallTitle}
                        >
                            Fuzion Home Services
                        </div>
                        <p className={styles.fusionEnergyBakerFieldDescription}>
                            Fuzion Home Services holds three important licenses:
                            a C-10 Electrician license, a C-20 HVAC license, and
                            a General B Contractor License. These let us take
                            care of many home projects for you, such as solar
                            power, heating, and air conditioning, patios, new
                            roofs, pools, turf, and many more. And you can pay
                            for all of it with just one loan.
                        </p>
                        <FusionEnergyButton label="Buy Now" />
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default BakerFields;
