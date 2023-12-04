import { useDebounce, usePosts } from '@hooks/index';
import API from '@services/api';
import { FunctionComponent, useEffect, useState } from 'react';
import { SearchInputProps } from './types';

/**
 * Renderiza um componente input para filtro por busca de "posts" (GitHub Issues)
 */
const SearchInput: FunctionComponent<SearchInputProps> = ({ ...props }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const { setPosts } = usePosts();
    const DEBOUNCE_TIME_IN_MILLISECONDS = 1000;

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
        if (inputValue !== '') {
            debouncedCallback();
        }
    }, [debouncedCallback, inputValue]);

    return (
        <input
            {...props}
            placeholder="Buscar conteúdo"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className={props.className || ''}
        />
    );
};

export default SearchInput;
