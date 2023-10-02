import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Contact = dynamic(
    () => import('@/lib/components/mainComponents/ContactUs'),
);
export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Have questions about one of our services? Don’t hesitate to ask us something',
};

const ContactPage: React.FC = () => {
    return <Contact />;
};

export default ContactPage;
