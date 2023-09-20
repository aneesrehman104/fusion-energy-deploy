import AntdStyledComponentsRegistry from '@/utils/AntdStyledComponentsRegistry'
import './globals.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fusion Energy',
    description: 'Fusion Energy',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
