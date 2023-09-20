'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Carousel, Col, Row, Grid } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { Images } from '@/assets/image';
import { FusionEnergyCarouselProps } from '@/lib/ts/interface';
import AntdStyledComponentsRegistry from '@/utils/AntdStyledComponentsRegistry';
import FusionEnergyCard from '../FusionEnergyCard';
import styles from './FusionEnergyCarousel.module.css';

const { useBreakpoint } = Grid;
const FusionEnergyCarousel: React.FC<FusionEnergyCarouselProps> = ({
    items,
    label,
}) => {
    const screens = useBreakpoint();
    const carouselRef = useRef<CarouselRef>(null);

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
            <div
                className={
                    screens.xs
                        ? styles.fusionEnergyCarouselWrapper
                        : styles.fusionEnergyCarouselWrapperlg
                }
            >
                <Row>
                    <Col
                        span={24}
                        className={styles.fusionEnergyCarouselItemCenter}
                    >
                        <h3
                            className={
                                screens.xs
                                    ? styles.fusionEnergyCarouselHeader
                                    : styles.fusionEnergyCarouselHeaderLg
                            }
                        >
                            {label}
                        </h3>
                    </Col>
                    <Col span={24}>
                        <Carousel
                            ref={carouselRef}
                            slidesToShow={screens.md ? 3 : 1}
                            dotPosition="bottom"
                            dots
                            waitForAnimate
                            adaptiveHeight
                            autoplay
                            className={styles.customCarousel}
                        >
                            {items.map((_item, index) => (
                                <FusionEnergyCard key={index} item={_item} />
                            ))}
                        </Carousel>
                    </Col>
                    <Col span={24}>
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
                    </Col>
                </Row>
            </div>
        </AntdStyledComponentsRegistry>
    );
};

export default FusionEnergyCarousel;
{
}
