import React from 'react';
import { FusionEnergyGallery } from '@/lib/components/commonComponents';
import { Images } from '@/assets/image';

interface PROPS {}
const Gallery: React.FC<PROPS> = () => {
    const iconsArray = [
        {
            image: Images.FuzionBatteries,
            name: 'Dollar1',
        },
        {
            image: Images.FuzionBatteries,
            name: 'Dollar2',
        },
        {
            image: Images.FuzionBatteries,
            name: 'Dollar3',
        },
    ];
    return (
        <section>
            <FusionEnergyGallery items={iconsArray} label="Batteries Gallery" />
        </section>
    );
};

export default Gallery;
