import React from 'react';
import Image from 'next/image';
import { Card, Rate } from 'antd';
import { FusionEnergyCardProps } from '@/lib/ts/interface';
import styles from './FusionEnergyCard.module.css';

type Props = { item: FusionEnergyCardProps };
const FusionEnergyCard: React.FC<Props> = ({ item }: Props) => {
    const [show, setShow] = React.useState<boolean>(false);
    const showHandle = () => setShow(!show);

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
                    <p
                        className={
                            show
                                ? styles.fusionEnergyCardDescriptionShow
                                : styles.fusionEnergyCardDescriptionHide
                        }
                    >
                        {item.description}
                    </p>
                </div>
                {!show ? (
                    <p className={styles.readMore} onClick={showHandle}>
                        Read More
                    </p>
                ) : (
                    <p className={styles.readMore} onClick={showHandle}>
                        Show Less
                    </p>
                )}
            </div>
        </Card>
    );
};

export default FusionEnergyCard;
