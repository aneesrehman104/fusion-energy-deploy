import React from 'react';
import { Col, Row } from 'antd';
import { commercialCards } from '@/utils/mock';
import { FusionEnergyCard } from '@/lib/components/commonComponents';
import styles from './feature.module.css';
const Feature: React.FC = () => {
    return (
        <section id="feature" className={styles.featureSection}>
            <div className={styles.featureHeadingContainer}>
                <p className={styles.featureSubheading}>
                    Adding Solar To Your Commercial Property Is Now More
                    Affordable & Profitable Than Ever
                </p>
                <hr className={styles.bakerFieldsLine} />
                <h1 className={styles.featureHeading}>
                    YOUR PROPERTY, YOUR POWER
                </h1>
            </div>
            <section className={styles.featureSection}>
                <Row gutter={[25, 32]}>
                    {commercialCards.map((item) => {
                        return (
                            <Col xs={24} lg={12} key={item.id}>
                                <FusionEnergyCard item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </section>
        </section>
    );
};

export default Feature;
