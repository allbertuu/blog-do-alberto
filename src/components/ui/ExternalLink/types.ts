import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface ExternalLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  icon?: any;
  showIcon: boolean;
  iconSide?: 'left' | 'right';
}
