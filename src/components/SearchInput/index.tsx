import { useDebounce, usePosts } from '@hooks/index';
import API from '@services/api';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
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
            if (res.data.total_count === 0) {
                toast.warn(
                    'Vish! O Alberto tá preguiçoso, ainda não fez esse post.',
                );
                setPosts([]);
                return;
            }

            toast.success('Boaaa! Achei aqui! 🎉', {autoClose: 1500})
            setPosts(res.data.items);
        } catch (error: any) {
            toast.error(error.message);
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
    }, [inputValue]);

    return (
        <input
            {...props}
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className={props.className || ''}
        />
    );
};

export default SearchInput;
