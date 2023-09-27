'use client';
import React from 'react';
import { iconsArray } from '@/utils/mock';
import dynamic from 'next/dynamic';
import { BannerProps, ContactFormProps } from '@/lib/ts/interface';

const BakerFields = dynamic(() => import('./BakerFields'));
const Gallery = dynamic(() => import('./Gallery'));
const ContactForm = dynamic<ContactFormProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

const HVAC = () => {
    const contactRef = React.useRef<HTMLDivElement>(null);
    const onClickHandle = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };
    return (
        <main id="HVAC">
            <Banner
                backgroundImage={'/FuzionEnergyHvacBG.png'}
                title={'HVAC- Beat the Heat'}
                description={'Looking for low-cost HVAC Installation'}
                iconsArray={iconsArray}
                showButton
                labelBtn="Buy Now"
                onClick={onClickHandle}
            />
            <BakerFields />
            <Gallery />
            <div ref={contactRef}>
                <ContactForm
                    title="Efficiency Is The Future"
                    subHeading=" CLICK HERE FOR OFFER DETAILS."
                />
            </div>
        </main>
    );
};

export default HVAC;
