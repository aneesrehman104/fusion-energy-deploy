'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { BannerProps } from '@/lib/ts/interface';
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

const Referrals = () => {
    return (
        <main id="ReferralsPage">
            <Banner
                backgroundImage={'/ReferralsBG.svg'}
                title={'Referrals'}
                description={'Join us and Search Thousands of Jobs'}
                height={'70vh'}
            />
        </main>
    );
};

export default Referrals;
