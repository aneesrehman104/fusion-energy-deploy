import React from 'react';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import { Navbar } from '@/lib/components/layoutComponents';
import Image from 'next/image';
import './fusionEnergyResidentialMain.css';

interface PROPS {}
const residentialMain: React.FC<PROPS> = () => {
    const iconsArray = [
        {
            icon: '/Dollar.svg',
            iconWidth: 12,
            iconHeight: 23,
            title: 'Guaranteed Lowest Price in America',
        },
        {
            icon: '/Ecosystem.svg',
            iconWidth: 50,
            iconHeight: 36,
            title: ' Integrated Product Ecosystem',
        },
        {
            icon: '/Monitoring.svg',
            iconWidth: 44,
            iconHeight: 44,
            title: ' System Performance Monitoring',
        },
    ];
    return (
        <section className="fusionEnergyResidentialMainBackgroundImage">
            <Navbar />
            <div className="fusionEnergResidentialMainSpaceBetween">
                <section>
                    <h2 className="fusionEnergyResidentialTitle">
                        Residential
                    </h2>
                    <p className="fusionEnergyResidentialDescription">
                        Looking for low-cost solar panel installation
                    </p>
                </section>

                <section className="fusionEnergyResidentialMainCenter">
                    <div className="iconStyle">
                        {iconsArray.map((item) => {
                            return (
                                <div key={item.icon}>
                                    <Image
                                        src={item.icon}
                                        alt={item.icon}
                                        height={item.iconHeight}
                                        width={item.iconWidth}
                                    />
                                    <div className="fusionEnergyWhiteSmallDescription">
                                        {item.title}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <FusionEnergyButton label="Find Out How" />
                </section>
            </div>
        </section>
    );
};

export default residentialMain;
