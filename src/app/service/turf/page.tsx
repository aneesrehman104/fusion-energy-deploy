import React from 'react';
import Turf from '@/lib/components/mainComponents/Turf';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Turf',
    description: 'Turf',
};
const TurfPage = () => {
    return <Turf />;
};

export default TurfPage;
