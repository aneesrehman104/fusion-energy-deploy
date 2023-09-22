import React from 'react';
import { TopBar, Footer, ContactForm } from '@/lib/components/layoutComponents';
import BatteriesMain from './BatteriesMain';
import BakerFields from './Surplus';
import Gallery from './Gallery';
interface PROPS {}

const Batteries: React.FC<PROPS> = () => {
    return (
        <main id="BatteriesPage">
            <TopBar />
            <BatteriesMain />
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

export default Batteries;
