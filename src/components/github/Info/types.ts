import { HTMLAttributes, ReactNode } from 'react';

export interface InfoProps {
    icon: any;
    info?: string;
}

export interface InfoListProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
