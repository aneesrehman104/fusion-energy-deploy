import React from 'react';
import dynamic from 'next/dynamic';

// Lazy-loaded components
const FinedOut = dynamic(() => import('./FinedOut'));
const LowCost = dynamic(() => import('./LowCostComponets'));
const WhoWeAre = dynamic(() => import('./WhoWeAre'));
const FusionEnergyCarousel = dynamic(
    () => import('@/lib/components/commonComponents/FusionEnergyCarousel'),
);

import { testimonials, staticHeading } from '@/utils/mock';

interface PROPS {}

const Home: React.FC<PROPS> = () => {
    return (
        <>
            <FinedOut />
            <LowCost />
            <WhoWeAre />
            <FusionEnergyCarousel
                items={testimonials}
                label={staticHeading}
                showCarousel
            />
        </>
    );
};

export default Home;
