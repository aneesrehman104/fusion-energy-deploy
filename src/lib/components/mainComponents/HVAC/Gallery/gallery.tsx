import React from 'react';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';
import { galleryArray } from '@/utils/mock';

const Gallery = () => {
    return (
        <section id="Gallery">
            <FusionEnergyGallery items={galleryArray} label="HVAC Gallery" />
        </section>
    );
};

export default Gallery;
