'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { iconsArray } from '@/utils/mock';
interface PROPS {}
const ContactForm = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const Gallery = dynamic(() => import('./Gallery'));
const BakerFields = dynamic(() => import('./Surplus'));

const Batteries: React.FC<PROPS> = () => {
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
        <main id="BatteriesPage">
            <Banner
                backgroundImage={'/FusionEnergyBatteriesBG.svg'}
                title={'Home Batteries'}
                description={'Looking for low-cost solar panel installation'}
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

export default Batteries;
