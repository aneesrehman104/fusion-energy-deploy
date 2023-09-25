import React from 'react';
import dynamic from 'next/dynamic';

// Lazy-loaded components
const FusionEnergyButton = dynamic(
    () => import('@/lib/components/commonComponents/FusionEnergyButton'),
);
const Navbar = dynamic(
    () => import('@/lib/components/layoutComponents/Navbar'),
);

import './fusionEnergyFindOut.css';

interface PROPS {}

const FinedOut: React.FC<PROPS> = () => {
    return (
        <section className="fusionEnergyFindOutBackgroundImage">
            <Navbar />
            <div className="fusionEnergSpaceBetween">
                <section>
                    <h2 className="fusionEnergyWhiteTitle">
                        Efficiency Is The Future
                    </h2>
                    <p className="fusionEnergyWhiteDescription">
                        Contact us today to take advantage
                    </p>
                </section>
                <section className="fusionEnergyFindOutCenter">
                    <FusionEnergyButton label="Find Out How" />
                </section>
            </div>
        </section>
    );
};

export default FinedOut;
