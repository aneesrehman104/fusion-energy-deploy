'use client';
import React from 'react';
import { Banner, ContactForm } from '@/lib/components/layoutComponents';
import { iconsArray, galleryArray } from '@/utils/mock';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';
import BakerFields from './BakerFields';

const Generator = () => {
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
        <section id="GeneratorPage">
            <Banner
                backgroundImage={'/FuzionEnergyGeneratorBG.svg'}
                title={'Generators'}
                description={'Looking for low-cost Generators Installation'}
                iconsArray={iconsArray}
                showButton
                labelBtn="Buy Now"
                onClick={onClickHandle}
            />
            <BakerFields />
            <section>
                <FusionEnergyGallery
                    items={galleryArray}
                    label="Generator Gallery"
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

export default Generator;
