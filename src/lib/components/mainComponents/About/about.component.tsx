'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { BannerProps, ContactFormProps } from '@/lib/ts/interface';

const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const Story = dynamic(() => import('./Story'));
const WhyFuzion = dynamic(() => import('./WhyFuzion'));
const WhoWeAre = dynamic(() => import('./WhoWeAre'));

const ContactForm = dynamic<ContactFormProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);

const About: React.FC = () => {
    return (
        <>
            <Banner
                backgroundImage={'/FuzionEnergyAboutBg.svg'}
                title={'About Us'}
                description={
                    'Fuzion Energy Helps your home become a smart energy efficient'
                }
                showPartner
            />
            <Story />
            <WhyFuzion />
            <WhoWeAre />
            <ContactForm title={'EFFICIENCY IS THE FUTURE'} />
        </>
    );
};

export default About;
