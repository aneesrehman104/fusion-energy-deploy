import React from 'react';
import dynamic from 'next/dynamic';
const TestimonialGrid = dynamic(() => import('./TestimonialGrid'));
const Banner = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const ContactForm = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Testimonial = () => {
    return (
        <main id="Testimonial">
            <Banner
                backgroundImage="/TestimonialBG.svg"
                title="Testimonials"
                description="See what People are Saying About Fuzion Energy"
                height={'70vh'}
            />
            <TestimonialGrid />
            <ContactForm title={'EFFICIENCY IS THE FUTURE'} />
        </main>
    );
};

export default Testimonial;
