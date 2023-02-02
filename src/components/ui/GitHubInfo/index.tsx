import { FunctionComponent } from 'react';
import { GitHubInfoProps } from './types';

/**
 * Renderiza um ícone e um texto (informação do GitHub) em uma linha
 *
 * @param icon Ícone a ser renderizado
 * @param text Texto a ser renderizado
 */
const GitHubInfo: FunctionComponent<GitHubInfoProps> = ({ icon, text }) => {
    return (
        <span className="flex items-center gap-2">
            {icon}
            <p>{text}</p>
        </span>
    );
};

export default GitHubInfo;
