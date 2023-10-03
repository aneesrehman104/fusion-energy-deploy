import React from 'react';
import dynamic from 'next/dynamic';
import { FusionEnergyGalleryProps } from '@/lib/ts/interface';
import { galleryArray } from '@/utils/mock';

const FusionEnergyGallery = dynamic<FusionEnergyGalleryProps>(() =>
    import('@/lib/components/commonComponents').then(
        (m) => m.FusionEnergyGallery,
    ),
);

interface PROPS {}
const Gallery: React.FC<PROPS> = () => {
    return (
        <section>
            <FusionEnergyGallery
                items={galleryArray}
                label="Batteries Gallery"
            />
        </section>
    );
};

export default Gallery;
