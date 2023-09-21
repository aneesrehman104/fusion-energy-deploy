import React from 'react';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import { Navbar } from '@/lib/components/layoutComponents';
import './whoWeAre.css';

interface PROPS {}
const WhoWeAre: React.FC<PROPS> = () => {
    return (
        <section className="fusionEnergyWhoWeAreBackgroundImage">
            <div className="fusionEnergWhoWeAreSpaceAround">
                <section className="fusionEnergWhoWeAreInnerWidth">
                    <p className="fusionEnergyGreenDescription">WHO WE ARE</p>
                    <h2 className="fusionEnergyWhoWeAreMainTitle">
                        YOUR ONE STOP SHOP FOR ENERGY EFFICIENT HOME
                        IMPROVEMENTS
                    </h2>
                    <p
                        className="fusionEnergyBackgroundDescription"
                        style={{ width: '70%' }}
                    >
                        Fuzion Energy aims to be your one-stop-shop for
                        energy-efficient home improvements, whether that be
                        artificial turf, solar, or heating and air.
                    </p>
                </section>
                <section className="fusionEnergyWhoWeAreCenter">
                    <FusionEnergyButton label="Learn More" />
                </section>
            </div>
        </section>
    );
};

export default WhoWeAre;
