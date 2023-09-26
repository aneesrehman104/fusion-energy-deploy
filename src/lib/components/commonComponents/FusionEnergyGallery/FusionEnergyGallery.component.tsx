'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { Images } from '@/assets/image';
import { FusionEnergyGalleryProps } from '@/lib/ts/interface';
import AntdStyledComponentsRegistry from '@/utils/AntdStyledComponentsRegistry';
import styles from './FusionEnergyGallery.module.css';

const FusionEnergyGallery: React.FC<FusionEnergyGalleryProps> = ({
    items,
    label,
}) => {
    const carouselRef = React.useRef<CarouselRef>(null);
    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    return (
        <AntdStyledComponentsRegistry>
            <div className={styles.fusionEnergyCarouselItemCenter}>
                <div className={styles.fusionEnergyCarouselItemInnerWidth}>
                    <h3 className={styles.fusionEnergyCarouselHeaderLg}>
                        {label}
                    </h3>
                    <Carousel
                        ref={carouselRef}
                        slidesToShow={1}
                        slidesToScroll={1}
                        dotPosition="bottom"
                        dots={false}
                        waitForAnimate
                        adaptiveHeight
                        autoplay
                        className={styles.fusionEnergyCarouselCenter}
                    >
                        {items.map((_item: any, index) => {
                            return (
                                <div key={index}>
                                    <Image src={_item.image} alt={_item.name} />
                                </div>
                            );
                        })}
                    </Carousel>

                    <div className={styles.fusionEnergyButtonWrapper}>
                        <Image
                            src={Images.LeftArrow}
                            alt="LeftArrow"
                            onClick={handlePrev}
                        />
                        <Image
                            src={Images.RightArrow}
                            alt="RightArrow"
                            onClick={handleNext}
                        />
                    </div>
                </div>
            </div>
        </AntdStyledComponentsRegistry>
    );
};

export default FusionEnergyGallery;
