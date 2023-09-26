import React from 'react';
import dynamic from 'next/dynamic';
import WhoWeAre from './WhoWeAre';

const Banner = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const Story = dynamic(() => import('./Story'));
const WhyFuzion = dynamic(() => import('./WhyFuzion'));
const ContactForm = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);

const About: React.FC = () => {
    return (
        <main id="AboutPage">
            <Banner
                backgroundImage={'/FuzionEnergyAboutBg.svg'}
                title={'About Us'}
                description={
                    'Fuzion Energy Helps your home become a smart energy efficient'
                }
                showPartner
            />
            <Story />
            <WhyFuzion />
            <WhoWeAre />
            <ContactForm title={'EFFICIENCY IS THE FUTURE'} />
        </main>
    );
};

export default About;
