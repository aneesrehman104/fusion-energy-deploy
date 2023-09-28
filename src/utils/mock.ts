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

export const staticHeading = 'What Our Customers Say';

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
                image: Images.ResidentialImage,
                heading: 'Residentials',
                subHeading: 'Energize Your Home',
                path: '/service/residential',
            },
            {
                image: Images.FuzionCommercialImage,
                heading: 'Commercials',
                subHeading: 'Energize Your Home',
                path: '/service/commercial',
            },
            {
                image: Images.FuzionBatteriesImage,
                heading: 'Batteries',
                subHeading: '',
                path: '/service/batteries',
            },
        ],
    },
    turf: {
        path: '',
        items: [
            {
                image: Images.FuzionTurfImage,
                heading: 'Turf',
                subHeading: 'Explore Turf',
                path: '/service/turf',
            },
        ],
    },
    hvac: {
        path: '',
        items: [
            {
                image: Images.FuzionHvacImage,
                heading: 'HVAC',
                subHeading: "Explore HVAC's",
                path: '/service/hvac',
            },
        ],
    },
    generator: {
        path: '',
        items: [
            {
                image: Images.FuzionGeneratorImage,
                heading: 'Generators',
                subHeading: 'Empower Yourself',
                path: '/service/generator',
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
        iconHeight: 44,
        title: 'Guaranteed Lowest Price in America',
    },
    {
        icon: '/Ecosystem.svg',
        iconWidth: 50,
        iconHeight: 44,
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

export const commercialCards = [
    {
        id: 1,
        image: Images.CostSaving,
        name: 'Cost Savings',
        description:
            "By generating electricity from the sun, solar panels can significantly reduce a commercial building's reliance on grid electricity. This leads to lower energy bills over time, helping businesses save money on their operational expenses.",
    },
    {
        id: 2,
        image: Images.LongTermInvestment,
        name: 'Long-Term Investment',
        description:
            'Solar panels have a long lifespan, typically lasting 25-30 years or more. The initial investment pays off over time, making solar a long-term and reliable energy solution.',
    },
    {
        id: 3,
        image: Images.RenewableEnergySource,
        name: 'Renewable Energy Source',
        description:
            'Solar power is a clean and renewable energy source, which means it does not deplete natural resources or produce harmful emissions. Using solar panels helps businesses reduce their carbon footprint and contribute to sustainability goals.',
    },
    {
        id: 4,
        image: Images.IncreasedPropertyValue,
        name: 'Increased Property Value',
        description:
            'Commercial properties equipped with solar panels often have higher resale values and can attract environmentally conscious buyers or tenants.',
    },
    {
        id: 5,
        image: Images.EnergyIndependence,
        name: 'Energy Independence',
        description:
            'By installing solar panels, businesses can partially or completely meet their energy needs on-site, reducing their dependence on the grid and any potential energy price fluctuations.',
    },
    {
        id: 6,
        image: Images.LEEDCertification,
        name: 'LEED Certification and Green Building Compliance',
        description:
            'Installing solar panels can contribute to earning certifications like LEED (Leadership in Energy and Environmental Design), which signifies a commitment to sustainable building practices.',
    },
    {
        id: 7,
        image: Images.TaxIncentives,
        name: 'Tax Incentives and Rebates',
        description:
            'Many governments offer tax incentives, rebates, or grants for businesses that invest in solar energy. These financial incentives can significantly offset the upfront installation costs, making solar more financially viable.',
    },
    {
        id: 8,
        image: Images.EnhancedBrandImage,
        name: 'Hedge Against Rising Energy Costs',
        description:
            'Solar panels provide protection against rising energy costs, as businesses can lock in lower energy prices by producing their electricity.',
    },
    {
        id: 9,
        image: Images.HedgeAgainstRisingEnergyCosts,
        name: 'Enhanced Brand Image',
        description:
            "Demonstrating a commitment to environmental responsibility and sustainability can enhance a commercial building's brand image. Customers and stakeholders may view the business more favorably, leading to potential competitive advantages.",
    },
    {
        id: 10,
        image: Images.EducationalAndCommunityEngagement,
        name: 'Educational and Community Engagement',
        description:
            'Adopting solar energy can inspire employees, customers, and the community to embrace renewable energy and support sustainable practices.',
    },
];

export const footerSections = [
    {
        id: 1,
        title: 'Services',
        items: [
            { text: 'Solar', url: '/service/residential' },
            { text: 'Artificial Turf', url: '/service/turf' },
            { text: 'Home Batteries', url: '/service/batteries' },
            { text: 'Generators', url: '/service/generator' },
            { text: 'HVAC', url: '/service/hvac' },
        ],
    },
    {
        id: 2,
        title: 'Links',
        items: [
            { text: 'About Us', url: '/about' },
            { text: 'Testimonials', url: '/testimonial' },
            { text: 'Gallery', url: '/gallery' },
            { text: 'Career', url: '/career' },
            { text: 'Contact Us', url: '/contact_us' },
        ],
    },
    {
        id: 3,
        title: 'Address',
        items: [
            {
                text: `Fuzion Energy 4003 Terracotta Ct Bakersfield, CA, 93314`,
                url: '',
            },
            {
                text: 'Phone: 661-243-9934',
                url: 'tel:+6612439934',
                phone: true,
            },

            { text: 'CSLB# 1025073, 1034083', url: '' },
        ],
    },
];

export const partnerLogo = [
    { image: Images.PanasonicSolarLogo, alt: 'PanasonicSolarLogo' },
    { image: Images.SolarEdgeLogo, alt: 'SolarEdgeLogo' },
    { image: Images.YorkLogo, alt: 'YorkLogo' },
    { image: Images.EnphaseImage, alt: 'EnphaseImage' },
];