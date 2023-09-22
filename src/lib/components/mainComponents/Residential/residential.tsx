import React from 'react';
import { TopBar, Footer, ContactForm } from '@/lib/components/layoutComponents';
import ResidentialMain from './ResidentialMain';
import BakerFields from './BakerFields';
import Gallery from './Gallery';
interface PROPS {}

const Residential: React.FC<PROPS> = () => {
    return (
        <main>
            <TopBar />
            <ResidentialMain />
            <BakerFields />
            <Gallery />
            <ContactForm
                title="Efficiency Is The Future"
                subHeading=" CLICK HERE FOR OFFER DETAILS."
            />
            <Footer />
        </main>
    );
};

export default Residential;
