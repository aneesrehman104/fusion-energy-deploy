import { StaticImageData } from 'next/image';
import { ReactNode, MouseEvent } from 'react';

export interface Props {
    selected_id?: string;
    handleLogout?: any;
    openModal?: any;
    hideModal?: any;
    children?: any;
    window?: () => Window;
}

export interface FusionEnergyButtonProps {
    type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
    icon?: ReactNode;
    loading?: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    className?: string;
    htmlType?: 'button' | 'submit' | 'reset';
    color?: string;
    height?: string;
    width?: string;
    backgroundColor?: string;
    label: ReactNode;
    marginRight?: string;
    marginLeft?: string;
}

export interface FusionEnergyCardProps {
    image: StaticImageData;
    name: string;
    rating: number;
    description: string;
}

export interface FusionEnergyCarouselProps {
    items: FusionEnergyCardProps[];
    label: string;
}

export interface HomeItem {
    title: string;
    button1Text: string;
    button1Link: string;
    button2Text: string;
    button2Link: string;
    backgroundImage: string;
}
