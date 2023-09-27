import React from 'react';
import dynamic from 'next/dynamic';
const Banner = dynamic(() =>
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
