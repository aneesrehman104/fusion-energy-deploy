import React from 'react';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';
import { Images } from '@/assets/image';

const Gallery = () => {
    const iconsArray = [
        {
            image: Images.FuzionBatteries,
            name: 'Dollar',
        },
        {
            image: Images.FuzionBatteries,
            name: 'Dollar',
        },
        {
            image: Images.FuzionBatteries,
            name: 'Dollar',
        },
    ];
    return (
        <section id="Gallery">
            <FusionEnergyGallery
                items={iconsArray}
                label="Commercial Gallery"
            />
        </section>
    );
};

export default Gallery;
