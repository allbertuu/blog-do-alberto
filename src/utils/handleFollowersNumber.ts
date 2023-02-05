import { formatNumber } from './formatNumber';

/** 
 * Handle the followers number to display in the UI
 * 
 * @param followers - Number of followers
 */
const handleFollowersNumber = (followers?: number) => {
    if (!followers) return 'Não foi possível carregar os seguidores';
    if (followers === 0) return 'Nenhum seguidor';
    return `${formatNumber(followers)} ${
        followers > 1 ? 'seguidores' : 'seguidor'
    }`;
};

export default handleFollowersNumber;
