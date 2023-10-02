import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Referrals = dynamic(
    () => import('@/lib/components/mainComponents/Referrals'),
);

export const metadata: Metadata = {
    title: 'Referrals',
    description: 'Referrals',
};

const ReferralsPage: React.FC = () => {
    return <Referrals />;
};

export default ReferralsPage;
