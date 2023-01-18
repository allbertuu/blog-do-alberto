import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
}
