'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { testimonials, staticHeading } from '@/utils/mock';
import { BannerProps, FusionEnergyCarouselProps } from '@/lib/ts/interface';
const LowCost = dynamic(() => import('./LowCostComponets'));
const WhoWeAre = dynamic(() => import('./WhoWeAre'));
const FusionEnergyCarousel = dynamic<FusionEnergyCarouselProps>(() =>
    import('@/lib/components/commonComponents').then(
        (m) => m.FusionEnergyCarousel,
    ),
);
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

interface PROPS {}

const Home: React.FC<PROPS> = () => {
    const contactRef = React.useRef<HTMLDivElement>(null);
    const onClickHandle = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };
    return (
        <>
            <Banner
                backgroundImage="/FusionEnergyEfficiencyBG.svg"
                title={'Efficiency Is The Future'}
                showButton
                description={' Contact us today to take advantage'}
                labelBtn={'Find Out How'}
                onClick={onClickHandle}
                height={'100vh'}
            />
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
