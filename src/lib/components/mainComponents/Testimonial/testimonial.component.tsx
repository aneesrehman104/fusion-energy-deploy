import React from 'react';
import dynamic from 'next/dynamic';
import { BannerProps, ContactFormProps } from '@/lib/ts/interface';
const TestimonialGrid = dynamic(() => import('./TestimonialGrid'));
const Banner = dynamic<BannerProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);
const ContactForm = dynamic<ContactFormProps>(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Testimonial = () => {
    return (
        <main id="Testimonial">
            <Banner
                backgroundImage="/TestimonialBG.png"
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
