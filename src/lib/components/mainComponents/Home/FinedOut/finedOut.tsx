import React, { FC } from 'react';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import { Navbar } from '@/lib/components/layoutComponents';
import './fusionEnergyFindOut.css';

interface PROPS {}
const FinedOut: React.FC<PROPS> = () => {
    return (
        <article
            style={{
                backgroundImage: `url(/FusionEnergyEfficiencyBG.svg)`,
            }}
            className="fusionEnergyFindOutBackgroundImage"
        >
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
        </article>
    );
};

export default FinedOut;