'use client';
import React from 'react';
import styles from './ContactForm.module.css';
import { Col, Row } from 'antd';
import Link from 'next/link';
import {
    FusionEnergyButton,
    FusionEnergyInput,
    FusionEnergySelect,
    FusionEnergyTextatea,
} from '../../commonComponents';

type PROPS = {
    title: string;
    subHeading?: string;
};

const ContactForm: React.FC<PROPS> = ({ title, subHeading }) => {
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const onChangeHandle = (event: any) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <main id="ContactForm" className={styles.contactFormContainer}>
            <section className={styles.contactFormWrapper}>
                <Row>
                    <Col span={24}>
                        <h1 className={styles.contactFormHeading}>{title}</h1>
                        {subHeading && (
                            <Link href="#">
                                <h3 className={styles.contactFormSubHeading}>
                                    {subHeading}
                                </h3>
                            </Link>
                        )}
                    </Col>
                    <Col span={24}>
                        <form
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '3rem',
                            }}
                        >
                            <Row
                                gutter={[32, 16]}
                                style={{
                                    width: '70%',
                                }}
                            >
                                <Col xs={24} md={12}>
                                    <FusionEnergyInput
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        onChange={onChangeHandle}
                                        value={form.name}
                                    />
                                </Col>
                                <Col xs={24} md={12}>
                                    <FusionEnergyInput
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        onChange={onChangeHandle}
                                        value={form.email}
                                    />
                                </Col>
                                <Col xs={24} md={12}>
                                    <FusionEnergyInput
                                        type="number"
                                        placeholder="Phone Number"
                                        name="phone"
                                        onChange={onChangeHandle}
                                        value={form.phone}
                                    />
                                </Col>
                                <Col xs={24} md={12}>
                                    <FusionEnergySelect
                                        value={form.service}
                                        placeholder="Select"
                                        options={[
                                            {
                                                label: 'Solar',
                                                value: 'solar',
                                            },
                                            {
                                                label: 'Batteries',
                                                value: 'batteries',
                                            },
                                            {
                                                label: 'Artifical Turf',
                                                value: 'turf',
                                            },
                                            {
                                                label: 'Genarators',
                                                value: 'Genarators',
                                            },
                                            {
                                                label: 'HVAC',
                                                value: 'HVAC',
                                            },
                                        ]}
                                    />
                                </Col>
                                <Col span={24}>
                                    <FusionEnergyTextatea placeholder="Message" />
                                </Col>
                                <Col
                                    span={24}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <FusionEnergyButton
                                        label="Submit"
                                        backgroundColor="#5B9C38"
                                        color="#fff"
                                    />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default ContactForm;