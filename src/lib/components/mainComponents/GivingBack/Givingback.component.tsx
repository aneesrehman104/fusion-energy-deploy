import React from 'react';
import dynamic from 'next/dynamic';
const ContactForm = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.ContactForm),
);
const Banner = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Banner),
);

const Givingback = () => {
    return (
        <main id="Givingback">
            <Banner
                backgroundImage={'/GivingBackBG.svg'}
                title={'Giving Back'}
                description={'Solar, Turf, HVAC, Utility Costs - Its All Here'}
                height={'70vh'}
            />
            <ContactForm
                title={'ZERO MONEY DOWN ON ALL PRODUCTS WITH MINIMUM PURCHASE'}
            />
        </main>
    );
};

export default Givingback;
