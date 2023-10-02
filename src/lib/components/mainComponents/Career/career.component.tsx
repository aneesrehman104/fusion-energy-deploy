'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { BannerProps } from '@/lib/ts/interface';
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const Career = () => {
    return (
        <main id="Career">
            <Banner
                backgroundImage={'/CareerBG.svg'}
                title={'Join Our Team'}
                description={'Join us and Search Thousands of Jobs'}
                height={'70vh'}
            />
        </main>
    );
};

export default Career;
