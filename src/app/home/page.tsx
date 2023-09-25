import dynamic from 'next/dynamic';
import { Metadata } from 'next';
const Home = dynamic(() => import('@/lib/components/mainComponents/Home'));
export const metadata: Metadata = {
    title: 'Home',
    description: 'Home',
};
const HomePage = () => {
    return <Home />;
};

export default HomePage;
