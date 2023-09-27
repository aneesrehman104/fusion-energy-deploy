import React from 'react';
import Batteries from '@/lib/components/mainComponents/Batteries';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Batteries',
    description: 'Batteries',
};
const BatteriesPage = () => {
    return <Batteries />;
};

export default BatteriesPage;
