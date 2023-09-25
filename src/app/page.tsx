import Home from '@/lib/components/mainComponents/Home';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Home',
    description: 'Home',
};
const MainPage = () => {
    return <Home />;
};
export default MainPage;
