import React from 'react';
import { TopBar, Footer } from '@/lib/components/layoutComponents';
import BatteriesMain from './BatteriesMain';
import BakerFields from './Surplus';
import Gallery from './Gallery';
interface PROPS {}

const Batteries: React.FC<PROPS> = () => {
    return (
        <main>
            <TopBar />
            <BatteriesMain />
            <BakerFields />
            <Gallery />
            <Footer />
        </main>
    );
};

export default Batteries;
