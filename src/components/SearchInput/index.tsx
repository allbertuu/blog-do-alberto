import usePosts from '@hooks/usePosts';
import API from '@services/api';
import classNames from '@utils/classNames';
import useDebounce from '@hooks/useDebounce';
import { FunctionComponent, useEffect, useState } from 'react';
import { SearchInputProps } from './types';

/**
 * Renderiza um componente input para filtro por busca de "posts" (GitHub Issues)
 */
const SearchInput: FunctionComponent<SearchInputProps> = ({ ...props }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const { setPosts, getPosts } = usePosts();
    const DEBOUNCE_TIME_IN_MILLISECONDS = 500;

    const getFilteredPosts = async () => {
        try {
            const res = await API.get('/search/issues', {
                params: {
                    q: `${inputValue} repo:allbertuu/blog-do-alberto`,
                },
            });
            setPosts(res.data.items);
        } catch (error) {
            console.error(error);
        }
    };

    const debouncedCallback = useDebounce(
        getFilteredPosts,
        DEBOUNCE_TIME_IN_MILLISECONDS,
    );

    useEffect(() => {
        // se o input estiver vazio, retorna todos os posts, senão, filtra
        // obs.: o trim() é para remover espaços em branco no início e no fim
        inputValue.trim() ? debouncedCallback() : getPosts();
    }, [inputValue]);

    return (
        <input
            {...props}
            placeholder="Buscar conteúdo"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
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
