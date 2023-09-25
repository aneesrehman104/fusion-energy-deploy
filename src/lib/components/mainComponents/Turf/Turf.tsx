'use client';
import React from 'react';
import { Banner, ContactForm } from '@/lib/components/layoutComponents';
import { galleryArray, iconsArray } from '@/utils/mock';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';

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
        <section id="TurfPage">
            <Banner
                backgroundImage={'/FuzionEnergyTurf.svg'}
                title={'Turf- Landscape the Efficiency'}
                description={'Looking for low-cost Turf Landscape Installation'}
                iconsArray={iconsArray}
                showButton
                labelBtn="Buy Now"
                onClick={onClickHandle}
            />
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
        </section>
    );
};

export default Turf;
