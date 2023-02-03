import { formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale';

/**
 * Formata a data para o formato: "há X dias/anos/meses", a partir do momento atual.
 *
 * @param date Data de início
 * @returns Data formatada
 */
const formatDateFromDateToNow = (date?: number | Date | string) =>
    date
        ? formatDistanceToNow(new Date(date), {
              locale: pt,
              addSuffix: true,
          })
        : 'Sem data';

export default formatDateFromDateToNow;
