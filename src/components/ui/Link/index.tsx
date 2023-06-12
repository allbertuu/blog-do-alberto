import classNames from '@utils/classNames';
import { ArrowSquareOut } from 'phosphor-react';
import { FunctionComponent } from 'react';
import { ILinkProps } from './types';

const Link: FunctionComponent<ILinkProps> = ({
    children,
    icon,
    showIcon,
    iconSide,
    ...props
}) => {
    const iconView = icon || (
        <ArrowSquareOut size="1.2rem" weight="fill" className="-mt-1" />
    );

    return (
        <a
            {...props}
            href={props.href || '#'}
            target={props.target || '_blank'}
            rel="noopener noreferrer"
            className={classNames(
                props.className || '',
                // reset styles
                'no-underline',
                // styles
                'text-sm font-bold uppercase text-red-500',
                'flex w-fit items-center gap-2',
                'cursor-pointer',
                'hover:opacity-75',
                // animação underline
                'relative transition-all duration-300 ease-in-out [&:after]:hover:w-full',
                'after:absolute after:left-0 after:-bottom-1 after:block after:h-[1px] after:w-0 after:bg-red-500 after:transition-all',
            )}
        >
            {iconSide === 'left' && showIcon && iconView} {children}{' '}
            {iconSide !== 'left' && showIcon && iconView}
        </a>
    );
};

export default Link;
