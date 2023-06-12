import { FunctionComponent } from 'react';
import { InfoListProps, InfoProps } from './types';
import classNames from '@utils/classNames';

/**
 * Renderiza um ícone e um texto (informação do GitHub)
 *
 * @param icon Ícone a ser renderizado
 * @param info Informação a ser renderizada em texto
 */
const Info: FunctionComponent<InfoProps> = ({ icon, info }) => {
    return (
        <span className="flex items-center gap-2">
            {icon}
            <p className="leading-none">{info || 'Sem essa info'}</p>
        </span>
    );
};

/**
 * Organiza de forma responsiva os componentes GitHubInfo.
 *
 * Utiliza 'Layout pattern'
 */
export const InfoList: FunctionComponent<InfoListProps> = ({
    children,
    ...props
}) => {
    return (
        <div
            {...props}
            className={classNames(
                props.className || '',
                'flex flex-col gap-2 text-blue-100 sm:flex-row sm:items-end sm:gap-4',
            )}
        >
            {children}
        </div>
    );
};

export default Info;
