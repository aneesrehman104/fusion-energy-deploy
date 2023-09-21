'use client';
import React, { FC, useState } from 'react';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import { Navbar } from '@/lib/components/layoutComponents';
import { Images } from '@/assets/image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './Footer.css';
import { Grid } from 'antd';

const footerSections = [
    {
        title: 'Services',
        items: [
            { text: 'Solar', url: '/solar' },
            { text: 'Artificial Turf', url: '/artificial-turf' },
            { text: 'Home Batteries', url: '/home-batteries' },
            { text: 'Generators', url: '/generators' },
            { text: 'HVAC', url: '/hvac' },
        ],
    },
    {
        title: 'Links',
        items: [
            { text: 'About Us', url: '/about-us' },
            { text: 'Testimonials', url: '/testimonials' },
            { text: 'Gallery', url: '/gallery' },
            { text: 'Career', url: '/career' },
            { text: 'Contact Us', url: '/contact-us' },
        ],
    },
    {
        title: 'Address',
        items: [
            {
                text: `Fuzion Energy 4003 Terracotta Ct Bakersfield, CA, 93314`,
                url: '',
            },
            { text: 'Phone: 661-243-9934', url: '' },

            { text: 'CSLB# 1025073, 1034083', url: '' },
        ],
    },
];
const { useBreakpoint } = Grid;

interface PROPS {}
const Footer: React.FC<PROPS> = () => {
    const router = useRouter();
    const screens = useBreakpoint();

    const [selectedSection, setSelectedSection] = useState<number | null>(null);

    const handleSectionClick = (index: number) => {
        setSelectedSection(index === selectedSection ? null : index);
    };
    return (
        <>
            <main>
                <section className="fusionEnergyFooterCenterStyle">
                    <div className="fusionEnergyFooterGreenWidth">
                        <div className="fusionEnergyFooterGreenBackgroundImage">
                            <div className="fusionEnergyFooterCardStyle">
                                <div className="fusionEnergyFooterGreenTitle">
                                    Fastest & secure way to get clean, safe and
                                    renewable energy
                                </div>
                                <FusionEnergyButton label="Get Free Estimates" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fusionEnergyFooterBackgroundImage">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="fusionEnergyFooterGreenWidth fusionEnergyFooterPaddingTop">
                            <div className="fusionEnergyFooterContainerStyle">
                                <Image
                                    src={Images.AppLogo}
                                    alt="fusion-energy-logo"
                                />

                                {footerSections.map((section, index) => (
                                    <div
                                        key={index}
                                        className="fusionEnergyFooterInnerContainerStyle"
                                    >
                                        <div
                                            className="fusionEnergyFooterTitles"
                                            onClick={() =>
                                                handleSectionClick(index)
                                            }
                                        >
                                            {section.title}
                                        </div>
                                        {!screens.lg
                                            ? selectedSection === index &&
                                              section.items.map(
                                                  (item, itemIndex) => (
                                                      <div
                                                          key={itemIndex}
                                                          className="fusionEnergyFooterText"
                                                          onClick={() =>
                                                              router.push(
                                                                  item?.url ||
                                                                      '/',
                                                              )
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
                                                          className="fusionEnergyFooterText"
                                                          onClick={() =>
                                                              router.push(
                                                                  item?.url ||
                                                                      '/',
                                                              )
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
                        <div className="fusionEnergyPoweredClass">
                            © 2023 Fuzion Energy | CSLB# 1025073, 1034083 |
                            Powered by Barton Marketing
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
};

export default Footer;
