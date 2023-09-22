import React from 'react';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';
import { Images } from '@/assets/image';

interface PROPS {}
const Gallery: React.FC<PROPS> = () => {
    const iconsArray = [
        {
            image: Images.ProfileImage,
            name: 'Dollar',
        },
        {
            image: Images.ProfileImage,
            name: 'Dollar',
        },
        {
            image: Images.ProfileImage,
            name: 'Dollar',
        },
    ];
    return (
        <section>
            <FusionEnergyGallery items={iconsArray} label="Batteries Gallery" />
        </section>
    );
};

export default Gallery;
