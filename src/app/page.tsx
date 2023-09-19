import RootLayout from './layout';
import Navbar from '@/lib/components/layoutComponents/Navbar/Navbar';
import TopBar from '@/lib/components/layoutComponents/Topbar/Topbar';

const MainPage = () => {
    return (
        <RootLayout>
            <main id="mainPage">
                <TopBar />
                <Navbar />
                <section className="sectionMain">
                    <div>Main Page </div>
                </section>
            </main>
        </RootLayout>
    );
};
export default MainPage;
