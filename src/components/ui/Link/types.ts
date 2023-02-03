import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    icon?: any;
    showIcon: boolean;
    iconSide?: 'left' | 'right';
}
