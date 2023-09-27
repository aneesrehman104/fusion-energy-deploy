import React from 'react';
import HVAC from '@/lib/components/mainComponents/HVAC';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'HVAC',
    description: 'HVAC',
};
const HvacPage = () => {
    return <HVAC />;
};

export default HvacPage;
