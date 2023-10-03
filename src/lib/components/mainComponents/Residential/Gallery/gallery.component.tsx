import React from 'react';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';
import { galleryArray } from '@/utils/mock';

interface PROPS {}
const Gallery: React.FC<PROPS> = () => {
    return (
        <section>
            <FusionEnergyGallery
                items={galleryArray}
                label="Residentials Gallery"
            />
        </section>
    );
};

export default Gallery;
