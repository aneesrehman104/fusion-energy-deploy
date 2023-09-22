import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Batteries',
    description: 'Batteries',
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
