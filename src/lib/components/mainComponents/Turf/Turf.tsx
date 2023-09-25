'use client';
import React from 'react';
import { Banner, ContactForm } from '@/lib/components/layoutComponents';
import { galleryArray, iconsArray } from '@/utils/mock';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';
import BakerFields from './BakerFields';

const Turf = () => {
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
        <main id="TurfPage">
            <Banner
                backgroundImage={'/FuzionEnergyTurf.svg'}
                title={'Turf- Landscape the Efficiency'}
                description={'Looking for low-cost Turf Landscape Installation'}
                iconsArray={iconsArray}
                showButton
                labelBtn="Buy Now"
                onClick={onClickHandle}
            />
            <BakerFields />
            <section>
                <FusionEnergyGallery
                    items={galleryArray}
                    label="Turf Gallery"
                />
            </section>
            <div ref={contactRef}>
                <ContactForm
                    title="Efficiency Is The Future"
                    subHeading=" CLICK HERE FOR OFFER DETAILS."
                />
            </div>
        </main>
    );
};

export default Turf;
