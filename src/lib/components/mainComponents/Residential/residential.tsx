import React from 'react';
import { TopBar, Footer } from '@/lib/components/layoutComponents';
import ResidentialMain from './ResidentialMain';
import BakerFields from './BakerFields';
interface PROPS {}

const Residential: React.FC<PROPS> = () => {
    return (
        <main>
            <TopBar />
            <ResidentialMain />
            <BakerFields />
            <Footer />
        </main>
    );
};

export default Residential;
