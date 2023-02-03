import { FunctionComponent } from 'react';
import { GitHubInfoProps } from './types';

/**
 * Renderiza um ícone e um texto (informação do GitHub) em uma linha
 *
 * @param icon Ícone a ser renderizado
 * @param info Informação a ser renderizada em texto
 */
const GitHubInfo: FunctionComponent<GitHubInfoProps> = ({ icon, info }) => {
    return (
        <span className="flex items-center gap-2">
            {icon}
            <p className="leading-none">{info || 'Sem essa info'}</p>
        </span>
    );
};

export default GitHubInfo;
