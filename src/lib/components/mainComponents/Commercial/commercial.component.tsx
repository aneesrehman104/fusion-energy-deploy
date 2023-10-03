'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { iconsArray } from '@/utils/mock';
import { ContactFormProps, BannerProps } from '@/lib/ts/interface';

const ContactForm = dynamic<ContactFormProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const Gallery = dynamic(() => import('./Gallery'));
const Feature = dynamic(() => import('./Feature'));

const Commercial = () => {
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
        <main id="CommercialPage">
            <Banner
                backgroundImage="/FuzionEnergyCommercailBG.svg"
                title="Commercial"
                description="YOUR COMMERCIAL SOLAR PARTNERS"
                iconsArray={iconsArray}
                showButton
                onClick={onClickHandle}
                labelBtn="Buy Now"
            />
            <Feature />
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

export default Commercial;
