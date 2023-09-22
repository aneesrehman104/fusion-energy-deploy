import { RootLayoutProps } from '@/lib/ts/interface';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HVAC- Beat the Heat',
    description: 'Looking for low-cost HVAC Installation',
};
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
