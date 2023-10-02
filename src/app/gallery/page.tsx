import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
const Gallery = dynamic(
    () => import('@/lib/components/mainComponents/Gallery'),
);

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Gallery',
};

const GalleryPage: React.FC = () => {
    return <Gallery />;
};

export default GalleryPage;
