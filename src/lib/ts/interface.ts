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
    image: StaticImageData | string;
    name: string;
    rating?: number;
    description?: string;
}

export interface FusionEnergyCarouselProps {
    items: FusionEnergyCardProps[];
    label: string;
    showCarousel: boolean;
}
export interface FusionEnergyGalleryProps {
    items: FusionEnergyCardProps[];
    label: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface HomeItem {
    title: string;
    button1Text: string;
    button1Link: string;
    button2Text: string;
    button2Link: string;
    backgroundImage: string;
}

export interface FusionEnergyInputProps {
    placeholder: string;
    type: string;
    name: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};