import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/lib/components/mainComponents/About'));

export const metadata: Metadata = {
    title: 'About',
    description: 'About',
};

const AboutPage = () => {
    return <About />;
};

export default AboutPage;
