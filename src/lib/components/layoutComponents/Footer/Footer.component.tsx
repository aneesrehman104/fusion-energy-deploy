'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Grid } from 'antd';
import { useRouter } from 'next/navigation';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import { footerSections } from '@/utils/mock';
import { Images } from '@/assets/image';
import styles from './Footer.module.css';
interface PROPS {}
const { useBreakpoint } = Grid;

const Footer: React.FC<PROPS> = () => {
    const router = useRouter();
    const screens = useBreakpoint();

    const [selectedSection, setSelectedSection] = useState<number | null>(null);

    const handleSectionClick = (index: number) => {
        setSelectedSection(index === selectedSection ? null : index);
    };

    const onClickHandler = (item: any) => {
        if (item?.phone) window.open(item?.url);
        else router.push(item?.url || '/');
    };
    return (
        <div>
            <section className={styles.fusionEnergyFooterCenterStyle}>
                <div className={styles.fusionEnergyFooterGreenWidth}>
                    <div
                        className={
                            styles.fusionEnergyFooterGreenBackgroundImage
                        }
                    >
                        <div className={styles.fusionEnergyFooterCardStyle}>
                            <div
                                className={styles.fusionEnergyFooterGreenTitle}
                            >
                                Fastest & secure way to get clean, safe and
                                renewable energy
                            </div>
                            <FusionEnergyButton label="Get Free Estimates" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.fusionEnergyFooterBackgroundImage}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        className={`${styles.fusionEnergyFooterGreenWidth} ${styles.fusionEnergyFooterPaddingTop}`}
                    >
                        <div
                            className={styles.fusionEnergyFooterContainerStyle}
                        >
                            <Image
                                src={Images.AppLogo}
                                alt="fusion-energy-logo"
                                loading="eager"
                            />

                            {footerSections.map((section, index) => (
                                <div
                                    key={index}
                                    className={
                                        styles.fusionEnergyFooterInnerContainerStyle
                                    }
                                >
                                    <div
                                        className={
                                            styles.fusionEnergyFooterTitles
                                        }
                                        onClick={() =>
                                            handleSectionClick(index)
                                        }
                                    >
                                        <span
                                            style={{
                                                display: !screens.md
                                                    ? 'block'
                                                    : 'flex',
                                                alignItems: 'center',
                                                gap: '.5rem',
                                            }}
                                        >
                                            {section.title}{' '}
                                            <div
                                                style={{
                                                    color: '#98CD3D',
                                                    width: '30px',
                                                    height: '3px',
                                                    backgroundColor: '#98CD3D',
                                                }}
                                            />
                                        </span>
                                    </div>
                                    {!screens.lg
                                        ? selectedSection === index &&
                                          section.items.map(
                                              (item, itemIndex) => (
                                                  <div
                                                      key={itemIndex}
                                                      className={
                                                          styles.fusionEnergyFooterText
                                                      }
                                                      onClick={() =>
                                                          onClickHandler(item)
                                                      }
                                                  >
                                                      {item.text}
                                                  </div>
                                              ),
                                          )
                                        : section.items.map(
                                              (item, itemIndex) => (
                                                  <div
                                                      key={itemIndex}
                                                      className={
                                                          styles.fusionEnergyFooterText
                                                      }
                                                      onClick={() =>
                                                          onClickHandler(item)
                                                      }
                                                  >
                                                      {item.text}
                                                  </div>
                                              ),
                                          )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <section>
                    <div className={styles.fusionEnergyPoweredClass}>
                        <p>
                            © 2023 Fuzion Energy | CSLB# 1025073, 1034083 |
                            Powered by &nbsp;
                            <u
                                style={{
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Barton Marketing
                            </u>
                        </p>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Footer;
