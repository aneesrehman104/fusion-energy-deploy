import React from 'react';
import { TopBar, Footer } from '@/lib/components/layoutComponents';
import { testimonials, staticHeading } from '@/utils/mock';
import { FusionEnergyCarousel } from '@/lib/components/commonComponents';
import FinedOut from './FinedOut';
import LowCost from './LowCostComponets';
import WhoWeAre from './WhoWeAre';
interface PROPS {}

const Home: React.FC<PROPS> = () => {
    return (
        <main>
            <TopBar />
            <FinedOut />
            <LowCost />
            <WhoWeAre />
            <FusionEnergyCarousel
                items={testimonials}
                label={staticHeading}
                showCarousel
            />
            <Footer />
        </main>
    );
};

export default Home;
