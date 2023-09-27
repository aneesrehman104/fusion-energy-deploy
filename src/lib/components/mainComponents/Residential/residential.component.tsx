'use client';
import React from 'react';
import dynamic from 'next/dynamic';
interface PROPS {}

const Gallery = dynamic(() => import('./Gallery'));
const BakerFields = dynamic(() => import('./BakerFields'));
const ContactForm = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

const iconsArray = [
    {
        icon: '/Dollar.svg',
        iconWidth: 12,
        iconHeight: 23,
        title: 'Guaranteed Lowest Price in America',
    },
    {
        icon: '/Ecosystem.svg',
        iconWidth: 50,
        iconHeight: 36,
        title: ' Integrated Product Ecosystem',
    },
    {
        icon: '/Monitoring.svg',
        iconWidth: 44,
        iconHeight: 44,
        title: ' System Performance Monitoring',
    },
];

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
                labelBtn={'Find Out How'}
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