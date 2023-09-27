import React from 'react';
import Residential from '@/lib/components/mainComponents/Residential';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Residential',
    description: 'Residential',
};
const ResidentialPage = () => {
    return <Residential />;
};

export default ResidentialPage;
