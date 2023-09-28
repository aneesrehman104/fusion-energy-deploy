'use client';
import React from 'react';
import { iconsArray, galleryArray } from '@/utils/mock';
import dynamic from 'next/dynamic';
import {
    FusionEnergyGalleryProps,
    ContactFormProps,
    BannerProps,
} from '@/lib/ts/interface';
const BakerFields = dynamic(() => import('./BakerFields'));
const FusionEnergyGallery = dynamic<FusionEnergyGalleryProps>(() =>
    import('@/lib/components/commonComponents').then(
        (m) => m.FusionEnergyGallery,
    ),
);
const ContactForm = dynamic<ContactFormProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

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
