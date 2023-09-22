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

export const navbarJson = {
    solar: {
        path: '',
        items: [
            {
                image: '',
                heading: 'Residentials',
                subHeading: 'Energize Your Home',
                path: '/residential',
            },
            {
                image: '',
                heading: 'Commercials',
                subHeading: 'Energize Your Home',
                path: '/commercial',
            },
            {
                image: '',
                heading: 'Batteries',
                subHeading: '',
                path: '/batteries',
            },
        ],
    },
    turf: {
        path: '',
        items: [
            {
                image: '',
                heading: 'Turf',
                subHeading: 'Explore Turf',
                path: '/turf',
            },
        ],
    },
    hvac: {
        path: '',
        items: [
            {
                image: '',
                heading: 'HVAC',
                subHeading: "Explore HVAC's",
                path: '/hvac',
            },
        ],
    },
    generator: {
        path: '',
        items: [
            {
                image: '',
                heading: 'Generators',
                subHeading: 'Empower Yourself',
                path: '/generator',
            },
        ],
    },
};

export const menus = [
    { heading: 'Solar Solutions', key: 'solar' },
    { heading: 'Turf-Landscape Efficiency', key: 'turf' },
    { heading: 'HVAC- Beat the Heat', key: 'hvac' },
    { heading: 'Generators- Keep the Power On', key: 'generator' },
];

export const iconsArray = [
    {
        icon: '/Dollar.svg',
        iconWidth: 12,
        iconHeight: 23,
        title: 'Guaranteed Lowest Price in America',
    },
    {
        icon: '/Ecosystem.svg',
        iconWidth: 50,
        iconHeight: 36,
        title: ' Integrated Product Ecosystem',
    },
    {
        icon: '/Monitoring.svg',
        iconWidth: 44,
        iconHeight: 44,
        title: ' System Performance Monitoring',
    },
];

export const galleryArray = [
    {
        image: Images.FuzionBatteries,
        name: 'Dollar',
    },
    {
        image: Images.FuzionBatteries,
        name: 'Dollar',
    },
    {
        image: Images.FuzionBatteries,
        name: 'Dollar',
    },
];