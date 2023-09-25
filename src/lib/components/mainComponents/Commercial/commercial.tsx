'use client';
import React from 'react';
import {
    Banner,
    ContactForm,
    Footer,
    TopBar,
} from '@/lib/components/layoutComponents';
import { iconsArray } from '@/utils/mock';
import Gallery from './Gallery';
import Feature from './Feature';

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
            <TopBar />
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
            <Footer />
        </main>
    );
};

export default Commercial;
