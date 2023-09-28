'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ContactFormProps, BannerProps } from '@/lib/ts/interface';
import { iconsArray } from '@/utils/mock';
interface PROPS {}

const Gallery = dynamic(() => import('./Gallery'));
const BakerFields = dynamic(() => import('./BakerFields'));
const ContactForm = dynamic<ContactFormProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

const Residential: React.FC<PROPS> = () => {
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
        <>
            <Banner
                backgroundImage="/FusionEnergyResidentialBG.svg"
                iconsArray={iconsArray}
                title={'Residential'}
                showButton
                description={'Looking for low-cost solar panel installation'}
                labelBtn={'Buy Now'}
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
        </>
    );
};

export default Residential;
