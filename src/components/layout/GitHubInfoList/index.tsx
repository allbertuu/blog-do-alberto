import classNames from '@utils/classNames';
import { FunctionComponent } from 'react';
import { GitHubInfoListProps } from './types';

/**
 * Organiza de forma responsiva os componentes GitHubInfo.
 *
 * Utiliza 'Layout pattern'
 */
const GitHubInfoList: FunctionComponent<GitHubInfoListProps> = ({
    children,
    ...props
}) => {
    return (
        <div
            {...props}
            className={classNames(
                props.className || '',
                'flex flex-col sm:flex-row gap-2 sm:gap-4 text-blue-100 sm:items-end',
            )}
        >
            {children}
        </div>
    );
};

export default GitHubInfoList;
