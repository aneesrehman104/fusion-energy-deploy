import React from 'react';
import styles from './testimonialGrid.module.css';
import { Col, Row } from 'antd';
import { testimonials } from '@/utils/mock';
import { FusionEnergyCard } from '@/lib/components/commonComponents';
const TestimonialGrid = () => {
    return (
        <section id="TestimonialGrid" className={styles.testimonialGrid}>
            <h1 className={styles.testimonialHeading}>
                WHAT OUR CUSTOMERS SAY
            </h1>
            <div className={styles.testimonialGridWidth}>
                <Row gutter={[16, 32]}>
                    {testimonials.map((_item) => (
                        <Col key={_item.name} lg={8}>
                            <FusionEnergyCard item={_item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default TestimonialGrid;
