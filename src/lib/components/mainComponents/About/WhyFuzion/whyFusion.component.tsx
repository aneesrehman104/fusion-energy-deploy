import React from 'react';
import { Col, Row } from 'antd';
import styles from './whyFusion.module.css';
import Image from 'next/image';
import { Images } from '@/assets/image';
const WhyFuzion = () => {
    return (
        <section id="WhyFuzion" className={styles.whyFuzionContainer}>
            <Row gutter={[16, 16]} className={styles.whyFuzionWrapper}>
                <Col xs={24} md={8}>
                    <h2 className={styles.whyFuzionHeading}>
                        why at Fuzion Energy
                    </h2>
                </Col>
                <Col xs={24} md={16}>
                    <p className={styles.whyFuzionDescription}>
                        There are dozens of energy companies in the market today
                        and that’s why at Fuzion Energy we want to not only help
                        families go solar, but we also can help your home become
                        a smart energy efficient home that aims to make life a
                        little more comfortable so that you can focus on the
                        more important things in life.
                    </p>
                </Col>
                <Col span={24}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '2rem',
                        }}
                    >
                        <Image
                            loading="eager"
                            src={Images.WhyFusionContent}
                            alt="WhyFusionContent"
                        />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default WhyFuzion;
