import React from 'react';
import { TopBar, Footer } from '@/lib/components/layoutComponents';
import { DM_Sans } from 'next/font/google';
import './globals.css';
const DMSans = DM_Sans({ subsets: ['latin'] });
export const RootLayout: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <html>
            <body className={DMSans.className}>
                <>
                    <section>
                        <TopBar />
                    </section>
                    {children}
                    <section>
                        <Footer />
                    </section>
                </>
            </body>
        </html>
    );
};

export default RootLayout;
