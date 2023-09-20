import React from 'react';
import { FusionEnergyBackgroundImage } from '@/lib/components/commonComponents';
import { TopBar } from '@/lib/components/layoutComponents';
import { testimonials, staticHeading, homeArray } from '@/utils/mock';
import { HomeItem } from '@/lib/ts/interface';
import FusionEnergyCarousel from '../../commonComponents/FusionEnergyCarousel';
import FinedOut from './FinedOut';

interface PROPS {}
const Home: React.FC<PROPS> = () => {
    return (
        <main>
            <TopBar />
            <FinedOut />
            <section>
                {homeArray.map((item: HomeItem) => {
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
            <section>
                <FusionEnergyCarousel
                    items={testimonials}
                    label={staticHeading}
                />
            </section>
        </main>
    );
};

export default Home;
