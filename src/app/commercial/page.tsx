import React from 'react';
import Commercial from '@/lib/components/mainComponents/Commercial';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Commercial',
    description: 'Commercial',
};
const CommercialPage = () => {
    return <Commercial />;
};

export default CommercialPage;
