import React from 'react';
import dynamic from 'next/dynamic';
import { galleryArray } from '@/utils/mock';
// dynamic imports
const FusionEnergyGallery = dynamic(() =>
    import('@/lib/components/commonComponents').then(
        (m) => m.FusionEnergyGallery,
    ),
);

const Gallery = () => {
    return (
        <section id="Gallery">
            <FusionEnergyGallery
                items={galleryArray}
                label="Commercial Gallery"
            />
        </section>
    );
};

export default Gallery;
