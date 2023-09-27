import React, { FC } from 'react';
import dynamic from 'next/dynamic';

// Lazy-loaded components
const FusionEnergyBackgroundImage = dynamic(
    () =>
        import('@/lib/components/commonComponents/FusionEnergyBackgroundImage'),
);

interface PROPS {}
const homeArray = [
    {
        title: 'Solar Panel',
        button1Text: 'Explore Your Home',
        button1Link: '',
        button2Text: 'Learn More',
        button2Link: '',
        backgroundImage: '/FusionEnergySolarPanelBG.png',
    },
    {
        title: 'Home Batteries',
        button1Text: 'Store Your Power',
        button1Link: '',
        button2Text: 'Learn More',
        button2Link: '',
        backgroundImage: '/FusionEnergyHomeBatteryBG.png',
    },
    {
        title: 'Artificial Turf',
        button1Text: 'Explore Turf',
        button1Link: '',
        button2Text: 'Learn More',
        button2Link: '',
        backgroundImage: '/FusionEnergyArtificalTurfBG.png',
    },
];
const LowCostComponets: FC<PROPS> = () => {
    return (
        <section>
            {homeArray.map((item: any) => {
                return (
                    <FusionEnergyBackgroundImage
                        key={item.title}
                        title={item.title}
                        button1Text={item.button1Text}
                        button1Link={item.button1Link}
                        button2Text={item.button2Text}
                        button2Link={item.button2Link}
                        backgroundImage={item.backgroundImage}
                    />
                );
            })}
        </section>
    );
};

export default LowCostComponets;
