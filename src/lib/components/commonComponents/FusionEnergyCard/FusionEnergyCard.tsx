import { Card, Rate } from 'antd';
import Image from 'next/image';
import React from 'react';
import { FusionEnergyCardProps } from '@/lib/ts/interface';
import styles from './FusionEnergyCard.module.css';

type Props = { item: FusionEnergyCardProps };
const FusionEnergyCard: React.FC<Props> = ({ item }: Props) => {
    return (
        <Card className={styles.fusionEnergyCard}>
            <div className={styles.fusionEnergyCardWrapper}>
                <Image
                    src={item.image}
                    className={styles.fusionEnergyCardProfile}
                    alt={item.name}
                />
                <h1 className={styles.fusionEnergyCardProfileName}>
                    {item.name}
                </h1>
                <div className={styles.ratingWrapper}>
                    <Rate value={item.rating} disabled allowHalf />
                </div>
                <div className={styles.fusionEnergyCardItemCenter}>
                    <p className={styles.fusionEnergyCardDescription}>
                        {item.description}
                    </p>
                </div>
                <p className={styles.readMore}>Read More</p>
            </div>
        </Card>
    );
};

export default FusionEnergyCard;
