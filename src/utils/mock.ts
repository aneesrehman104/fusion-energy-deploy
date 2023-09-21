import { Images } from '@/assets/image';
import { generateRandomNumber } from './helper';

const dummypara = `Lorem ipsum dolor sit amet consectetur, adipisicing
elit. Quia, labore! Laudantium consequatur sint
similique voluptates doloremque, aspernatur quae, natus,
expedita aliquid necessitatibus optio corporis ullam
veritatis voluptas quibusdam nam temporibus? Lorem ipsum
dolor sit amet consectetur adipisicing elit. Impedit
vero quaerat quas modi harum excepturi praesentium ab
architecto delectus! Consectetur, libero ipsa incidunt
esse a nobis quis. Nam, est illum!`;

export const staticHeading = 'What Our Customers Says';

export const testimonials = [
    {
        image: Images.ProfileImage,
        name: 'Test User1',
        rating: generateRandomNumber(),
        description: dummypara,
    },
    {
        image: Images.ProfileImage,
        name: 'Test User2',
        rating: generateRandomNumber(),
        description: dummypara,
    },
    {
        image: Images.ProfileImage,
        name: 'Test User3',
        rating: generateRandomNumber(),
        description: dummypara,
    },
    {
        image: Images.ProfileImage,
        name: 'Test User4',
        rating: generateRandomNumber(),
        description: dummypara,
    },
    {
        image: Images.ProfileImage,
        name: 'Test User5',
        rating: generateRandomNumber(),
        description: dummypara,
    },
    {
        image: Images.ProfileImage,
        name: 'Test User6',
        rating: generateRandomNumber(),
        description: dummypara,
    },
    {
        image: Images.ProfileImage,
        name: 'Test User',
        rating: generateRandomNumber(),
        description: dummypara,
    },
    {
        image: Images.ProfileImage,
        name: 'Test User',
        rating: generateRandomNumber(),
        description: dummypara,
    },
    {
        image: Images.ProfileImage,
        name: 'Test User',
        rating: generateRandomNumber(),
        description: dummypara,
    },
];

export const homeArray = [
    {
        title: 'Solar Panel',
        button1Text: 'Explore Your Home',
        button1Link: '',
        button2Text: 'Learn More',
        button2Link: '',
        backgroundImage: '/FusionEnergySolarPanelBG.svg',
    },
    {
        title: 'Home Batteries',
        button1Text: 'Store Your Power',
        button1Link: '',
        button2Text: 'Learn More',
        button2Link: '',
        backgroundImage: '/FusionEnergyHomeBatteryBG.svg',
    },
    {
        title: 'Artificial Turf',
        button1Text: 'Explore Turf',
        button1Link: '',
        button2Text: 'Learn More',
        button2Link: '',
        backgroundImage: '/FusionEnergyArtificalTurfBG.svg',
    },
];
