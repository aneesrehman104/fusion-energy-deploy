'use client';
import React from 'react';
import { Col, Row, Grid } from 'antd';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import Image from 'next/image';
import styles from './fusionEnergyTrufHome.module.css';
import { Images } from '@/assets/image';
const { useBreakpoint } = Grid;
interface PROPS {}
const TrufHome: React.FC<PROPS> = () => {
    const screens = useBreakpoint();

    return (
        <main className={styles.fusionEnergyTrufHomeMain}>
            <section className={styles.fusionEnergyTrufHomeMaainSection}>
                <p className={styles.fusionEnergyTrufHomeTextStyle}>
                    FALL IN LOVE WITH THE YARD OF YOUR DREAMS
                </p>
                <hr className={styles.fusionEnergyTrufHomeHrStyle} />
                <h2 className={styles.fusionEnergyTrufHomeTitle}>
                    Furthering Your Homes Ability To Be Energy Efficient
                </h2>
            </section>
            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} md={{ span: 10, order: 1 }}>
                        <div className={styles.fusionEnergyBakerInnerDiv}>
                            <p
                                className={
                                    styles.fusionEnergyTrufHomeDescription
                                }
                            >
                                Did you know that the average lawn uses 125
                                gallons of water day per 1000 square feet a day?
                                Save money on your water bill by installing our
                                beautiful and eco-friendly artificial turf. Let
                                us help make your lawn beautiful and
                                maintenance-free year-round! Our turf
                                consultants will custom design the lawn of your
                                dreams. From front and back lawns, to custom
                                putting greens, we do it all! Give us a call
                                today for your free no-obligation quote, it only
                                takes 15 minutes to see how your yard can be
                                transformed!
                            </p>
                            <FusionEnergyButton label="Buy Now" />
                        </div>
                    </Col>

                    <Col span={24} order={2} md={{ span: 11, order: 2 }}>
                        <div>
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/H9fg7GFagF4?si=XqNysph-7qnBa1-P"
                                title="YouTube video player"
                                frameBorder="0"
                                style={{
                                    borderRadius: '5px',
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default TrufHome;
