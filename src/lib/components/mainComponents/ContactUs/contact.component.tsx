'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { BannerProps } from '@/lib/ts/interface';
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const Contact = () => {
    return (
        <main id="ContactPage">
            <Banner
                backgroundImage={'/ContactUsBG.svg'}
                title={'Contact us'}
                description={
                    'Have questions about one of our services? Don’t hesitate to ask us something'
                }
                height={'70vh'}
            />
        </main>
    );
};

export default Contact;
