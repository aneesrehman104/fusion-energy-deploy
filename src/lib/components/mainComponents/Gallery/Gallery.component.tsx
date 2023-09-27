import dynamic from 'next/dynamic';
import React from 'react';

const ContactForm = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const Gallery: React.FC = () => {
    return (
        <main id="GalleryPage">
            <Banner
                backgroundImage={'/GalleryBG.svg'}
                title="Gallery"
                description="Fuzion Energy Helps your home become a smart energy efficient"
                height={'70vh'}
            />
            <ContactForm title={''} />
        </main>
    );
};

export default Gallery;
