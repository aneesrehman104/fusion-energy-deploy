'use client';
import React from 'react';
import { ContactForm, Banner } from '@/lib/components/layoutComponents';
import BakerFields from './Surplus';
import Gallery from './Gallery';
import { iconsArray } from '@/utils/mock';
interface PROPS {}

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
