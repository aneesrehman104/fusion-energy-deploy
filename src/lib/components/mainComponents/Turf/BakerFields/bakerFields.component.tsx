import React from 'react';
import { Col, Row } from 'antd';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import styles from './bakerFields.module.css';

const BakerFields = () => {
    return (
        <main className={styles.bakerFieldsContainer}>
            <section className={styles.bakerFieldsHeadingWrapper}>
                <p className={styles.bakerFieldsSubheading}>
                    FALL IN LOVE WITH THE YARD OF YOUR DREAMS
                </p>
                <hr className={styles.bakerFieldsLine} />
                <h2 className={styles.bakerFieldsTitle}>
                    FURTHERING YOUR HOME&apos;S ABILITY TO BE ENERGY EFFICIENT
                </h2>
            </section>
            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} md={{ span: 10, order: 1 }}>
                        <div>
                            <p className={styles.bakerFieldDescription}>
                                Did you know that the average lawn uses 125
                                gallons of water day per 1000 square feet a day?
                                Save money on your water bill by installing our
                                beautiful and eco-friendly artificial turf. Let
                                us help make your lawn beautiful and
                                maintenance-free year-round!
                            </p>
                            <p className={styles.bakerFieldDescription}>
                                Our turf consultants will custom design the lawn
                                of your dreams. From front and back lawns, to
                                custom putting greens, we do it all! Give us a
                                call today for your free no-obligation quote, it
                                only takes 15 minutes to see how your yard can
                                be transformed!
                            </p>
                            <FusionEnergyButton label="Buy Now" />
                        </div>
                    </Col>
                    <Col span={24} md={{ span: 10, order: 2 }}>
                        <div>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/H9fg7GFagF4?si=XqNysph-7qnBa1-P"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                style={{
                                    borderRadius: '5px',
                                }}
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default BakerFields;
