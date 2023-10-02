import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Career = dynamic(() => import('@/lib/components/mainComponents/Career'));
export const metadata: Metadata = {
    title: 'Join Our Team',
    description: 'Join us and Search Thousands of Jobs',
};

const CareerPage: React.FC = () => {
    return <Career />;
};

export default CareerPage;
