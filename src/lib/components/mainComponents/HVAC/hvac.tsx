'use client';
import React from 'react';
import { Banner, ContactForm } from '@/lib/components/layoutComponents';
import { iconsArray } from '@/utils/mock';
import Gallery from './Gallery';
import BakerFields from './BakerFields';

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
                backgroundImage={'/FuzionEnergyHvacBG.svg'}
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
