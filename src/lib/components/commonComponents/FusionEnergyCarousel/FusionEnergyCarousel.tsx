'use client';
import React from 'react';
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
    showCarousel,
}) => {
    const screens = useBreakpoint();
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
                        {showCarousel ? (
                            <Carousel
                                ref={carouselRef}
                                slidesToShow={screens.md ? 3 : 1}
                                slidesToScroll={screens.md ? 3 : 1}
                                dotPosition="bottom"
                                dots={false}
                                waitForAnimate
                                // adaptiveHeight
                                autoplay
                            >
                                {items.map((_item, index) => (
                                    <FusionEnergyCard
                                        key={index}
                                        item={_item}
                                    />
                                ))}
                            </Carousel>
                        ) : (
                            <Row gutter={[0, 32]}>
                                {items.map((_item, index) => (
                                    <Col xs={24} md={8} key={index}>
                                        <FusionEnergyCard
                                            key={index}
                                            item={_item}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </Col>
                    {showCarousel && (
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
                    )}
                </Row>
            </div>
        </AntdStyledComponentsRegistry>
    );
};

export default FusionEnergyCarousel;
{
}
