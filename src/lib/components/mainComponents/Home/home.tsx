import React from 'react';
import { TopBar, Footer } from '@/lib/components/layoutComponents';
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
            <Footer />
        </main>
    );
};

export default Home;
