import React from 'react';
import styles from './feature.module.css';
import { commercialCards } from '@/utils/mock';
import { FusionEnergyCard } from '@/lib/components/commonComponents';
import { Col, Row } from 'antd';
const Feature: React.FC = () => {
    return (
        <section id="feature" className={styles.featureSection}>
            <div className={styles.featureHeadingContainer}>
                <p className={styles.featureSubheading}>
                    Adding Solar To Your Commercial <u>Property Is Now More</u>{' '}
                    Affordable & Profitable Than Ever
                </p>
                <h1 className={styles.featureHeading}>
                    YOUR PROPERTY, YOUR POWER
                </h1>
            </div>
            <section className={styles.featureSection}>
                <Row gutter={[25, 32]}>
                    {commercialCards.map((item, index: number) => {
                        return (
                            <Col xs={24} lg={12}>
                                <FusionEnergyCard
                                    item={item}
                                ></FusionEnergyCard>
                            </Col>
                        );
                    })}
                </Row>
            </section>
        </section>
    );
};

export default Feature;
