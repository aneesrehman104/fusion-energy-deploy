import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Givingback = dynamic(
    () => import('@/lib/components/mainComponents/GivingBack'),
);

export const metadata: Metadata = {
    title: 'GivingBack',
    description: 'GivingBack',
};

const GivingBackPage: React.FC = () => {
    return <Givingback />;
};

export default GivingBackPage;
