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
                    HOME BACKUP POWER WITH GENERAC GENERATORS
                </h2>
            </section>
            <section>
                <Row justify="space-around" align="middle">
                    <Col span={24} md={{ span: 10, order: 1 }}>
                        <div>
                            <h1
                                className={
                                    styles.fusionEnergyBakerFieldSmallTitle
                                }
                            >
                                Home Backup Generators
                            </h1>
                            <p className={styles.bakerFieldDescription}>
                                Get comfort, security, and convenience with a
                                Generac Home Generator. Your Generac home backup
                                generator runs on your existing natural gas or
                                LP fuel supply to power your home directly.
                            </p>
                            <p className={styles.bakerFieldDescription}>
                                And no need to worry about being there to turn
                                your generator on or off because it does that
                                for you automatically. Plus, you can monitor the
                                status of your generator, including operating
                                status and maintenance alerts, right from your
                                smarthpone or tablet.
                            </p>
                            <FusionEnergyButton label="Buy Now" />
                        </div>
                    </Col>
                    <Col span={24} md={{ span: 10, order: 2 }}>
                        <div>
                            <Image
                                src={Images.GeneratorContent}
                                alt="GeneratorContentImage"
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
