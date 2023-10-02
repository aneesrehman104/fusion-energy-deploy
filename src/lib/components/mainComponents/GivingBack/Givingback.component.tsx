'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ContactFormProps, BannerProps } from '@/lib/ts/interface';
const ContactForm = dynamic<ContactFormProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

const Givingback = () => {
    return (
        <main id="Givingback">
            <Banner
                backgroundImage={'/GivingBackBG.svg'}
                title={'Giving Back'}
                description={'Solar, Turf, HVAC, Utility Costs - Its All Here'}
                height={'70vh'}
            />
            <ContactForm
                title={'ZERO MONEY DOWN ON ALL PRODUCTS WITH MINIMUM PURCHASE'}
            />
        </main>
    );
};

export default Givingback;
