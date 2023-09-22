import { RootLayoutProps } from '@/lib/ts/interface';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Commercial',
    description: 'YOUR COMMERCIAL SOLAR PARTNERS',
};
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
