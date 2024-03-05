import classNames from '@/utils/classNames';
import { InfoListProps, InfoProps } from './types';

/**
 * Renderiza um ícone e um texto (informação do GitHub)
 *
 * @param icon Ícone a ser renderizado
 * @param info Informação a ser renderizada em texto
 */
const Info: React.FC<InfoProps> = ({ icon, info }) => {
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
export const InfoList: React.FC<InfoListProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(
        props.className || '',
        'flex flex-col gap-2 text-blue-100 sm:gap-4'
      )}
    >
      {children}
    </div>
  );
};

export default Info;
