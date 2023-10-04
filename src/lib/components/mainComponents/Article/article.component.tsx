'use client';
import dynamic from 'next/dynamic';

const Banner = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

const Article = () => {
    return (
        <main id="ArticlePage">
            <Banner
                backgroundImage={'/GalleryBG.svg'}
                title={'Informational Resources'}
                description={'Solar, Turf, HVAC, Utility Costs - Its All Here'}
                height={'70vh'}
            />
        </main>
    );
};

export default Article;
