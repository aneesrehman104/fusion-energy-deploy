import React from 'react';
import { TopBar, Footer } from '@/lib/components/layoutComponents';
import ResidentialMain from './ResidentialMain';

interface PROPS {}

const Residential: React.FC<PROPS> = () => {
    return (
        <main>
            <TopBar />
            <ResidentialMain />
            <Footer />
        </main>
    );
};

export default Residential;
