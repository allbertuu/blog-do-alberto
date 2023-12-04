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
    const inputElement = useRef<HTMLInputElement>(null);

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

            toast.success('Boaaa! Achei aqui! 🎉', { autoClose: 1500 });
            setPosts(res.data.items);
        } catch (error: any) {
            toast.error(
                <>
                    Desculpa, não deu para pesquisar. Erro interno 🔎
                    <br />
                    <small>{error.message}</small>
                </>,
            );;
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

    // That's a way to autoFocus that respect React way of doing things
    // https://blog.maisie.ink/react-ref-autofocus/#time-for-react
    // https://github.com/facebook/react/issues/11851#issuecomment-351672131
    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            ref={inputElement}
            className={props.className || ''}
        />
    );
};

export default SearchInput;
