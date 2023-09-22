import RootLayout from './layout';
import Home from '@/lib/components/mainComponents/Home';

const MainPage = () => {
    return (
        <RootLayout>
            <main id="mainPage">
                <Home />
            </main>
        </RootLayout>
    );
};
export default MainPage;
