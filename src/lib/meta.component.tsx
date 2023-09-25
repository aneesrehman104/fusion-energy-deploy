import React from 'react';
import { TopBar, Footer } from '@/lib/components/layoutComponents';
import { DM_Sans } from 'next/font/google';

const DMSans = DM_Sans({ subsets: ['latin'] });

export const Meta: React.FC<{
    children: React.ReactNode;
    title: string;
    description: string;
    logo?: string;
    style?: object;
    externalMetaTags?: Array<{
        name: string;
        content: string;
        meta_id: string;
    }>;
}> = ({ children, title, description, logo, style, externalMetaTags }) => {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                {externalMetaTags &&
                    externalMetaTags.map((metaTag) => {
                        return (
                            <meta
                                key={metaTag.meta_id}
                                name={metaTag.name}
                                content={metaTag.content}
                            />
                        );
                    })}
            </head>

            <body style={style} className={DMSans.className}>
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
