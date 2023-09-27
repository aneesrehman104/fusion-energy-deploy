import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@/lib/components/mainComponents/Home'));
export const metadata: Metadata = {
    title: 'Home',
    description: 'Home',
};
const HomePage = () => {
    return <Home />;
};

export default HomePage;
