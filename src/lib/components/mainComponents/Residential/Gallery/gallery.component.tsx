import React from 'react';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';
import { Images } from '@/assets/image';

interface PROPS {}
const Gallery: React.FC<PROPS> = () => {
    const iconsArray = [
        {
            image: Images.FuzionBatteries,
            name: 'Images.FuzionBatteries',
        },
    ];
    return (
        <section>
            <FusionEnergyGallery
                items={iconsArray}
                label="Residentials Gallery"
            />
        </section>
    );
};

export default Gallery;
