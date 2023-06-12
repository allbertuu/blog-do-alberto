import { ReactNode } from 'react';

export interface TooltipProps {
    children: ReactNode;
    content: string | number;
    secondary?: boolean;
}
