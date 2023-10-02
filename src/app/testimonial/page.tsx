import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Testimonial = dynamic(
    () => import('@/lib/components/mainComponents/Testimonial'),
);

export const metadata: Metadata = {
    title: 'Testimonial',
    description: 'Testimonial',
};

const TestimonialPage = () => {
    return <Testimonial />;
};

export default TestimonialPage;
