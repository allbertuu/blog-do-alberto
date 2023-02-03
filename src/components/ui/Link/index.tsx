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
            role={'link'}
            className={classNames(
                props.className || '',
                'uppercase text-sm font-bold text-red-500',
                'flex gap-2 items-center w-fit',
                'cursor-pointer',
                'hover:opacity-75',
                // animação underline
                'relative [&:after]:hover:w-full transition-all duration-300 ease-in-out',
                'after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-red-500 after:transition-all after:block',
            )}
        >
            {iconSide === 'left' && showIcon && iconView} {children}{' '}
            {iconSide !== 'left' && showIcon && iconView}
        </a>
    );
};

export default Link;
