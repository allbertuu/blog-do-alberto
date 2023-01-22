import usePosts from '@hooks/usePosts';
import classNames from '@utils/classNames';
import { FunctionComponent } from 'react';
import { SearchInputProps } from './types';

/**
 * Renderiza um componente input para filtro por busca de "posts" (GitHub Issues)
 */
const SearchInput: FunctionComponent<SearchInputProps> = ({ ...props }) => {
    const { setSearchValue } = usePosts();

    return (
        <input
            id="search-form"
            placeholder="Buscar conteúdo"
            onChange={(e) => setSearchValue(e.target.value)}
            className={classNames(
                props.className || '',
                // reset input
                'outline-none',
                // styles
                'rounded-md bg-blue-800 px-4 py-3 text-blue-200 placeholder:text-blue-300',
                'border border-blue-400 focus:border-red-500',
            )}
        />
    );
};

export default SearchInput;
