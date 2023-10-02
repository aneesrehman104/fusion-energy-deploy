'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { galleryArray, iconsArray } from '@/utils/mock';
import {
    BannerProps,
    ContactFormProps,
    FusionEnergyGalleryProps,
} from '@/lib/ts/interface';

const BakerFields = dynamic(() => import('./BakerFields'));
const ContactForm = dynamic<ContactFormProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const FusionEnergyGallery = dynamic<FusionEnergyGalleryProps>(() =>
    import('@/lib/components/commonComponents').then(
        (m) => m.FusionEnergyGallery,
    ),
);

const Turf: React.FC = () => {
    const contactRef = React.useRef<HTMLDivElement>(null);
    const onClickHandle = (): void => {
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
