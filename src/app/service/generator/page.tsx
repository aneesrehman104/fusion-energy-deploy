import React from 'react';
import Generator from '@/lib/components/mainComponents/Generator';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Generator',
    description: 'Generator',
};
const GeneratorPage = () => {
    return <Generator />;
};

export default GeneratorPage;
