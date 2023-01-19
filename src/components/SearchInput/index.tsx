import usePosts from '@hooks/usePosts';
import API from '@services/api';
import classNames from '@utils/classNames';
import { FunctionComponent, useEffect, useState } from 'react';
import { SearchInputProps } from './types';

/**
 * Renderiza um componente input para filtro por busca de "posts" (GitHub Issues)
 */
const SearchInput: FunctionComponent<SearchInputProps> = ({ ...props }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const { setPosts } = usePosts();

    const getFilteredPosts = async () => {
        try {
            const res = await API.get('/search/issues', {
                params: {
                    q: `${inputValue}%20repo:allbertuu/blog-do-alberto`,
                },
            });
            setPosts(res.data.items);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        inputValue ? getFilteredPosts() : null;
    }, [inputValue]);

    return (
        <input
            {...props}
            id="search-form"
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
