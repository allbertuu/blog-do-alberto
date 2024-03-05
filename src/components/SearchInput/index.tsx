import { useDebounce, usePosts } from '@hooks/index';
import { GitHubAPI } from '@services/github.api';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { SearchInputProps } from './types';

/**
 * Renderiza um componente input para filtro por busca de "posts" (GitHub Issues)
 */
const SearchInput: React.FC<SearchInputProps> = ({ ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { setPosts, getPosts } = usePosts();
  const DEBOUNCE_TIME_IN_MILLISECONDS = 1000;
  const SEARCH_MIN_LENGTH = 3;
  const inputElement = useRef<HTMLInputElement>(null);

  const getFilteredPosts = useCallback(async () => {
    try {
      const res = await GitHubAPI.get('/search/issues', {
        params: {
          q: `${inputValue} repo:allbertuu/blog-do-alberto is:issue`,
        },
      });
      if (res.data.items.length === 0) {
        toast.warn('Vish! O Alberto tá preguiçoso, ainda não fez esse post 😂');
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
        </>
      );
    }
  }, [inputValue, setPosts]);

  const debouncedCallback = useDebounce(
    getFilteredPosts,
    DEBOUNCE_TIME_IN_MILLISECONDS
  );

  useEffect(() => {
    if (inputValue.length >= SEARCH_MIN_LENGTH) {
      debouncedCallback();
    }

    if (inputValue.length === 0) {
      getPosts();
    }
  }, [debouncedCallback, getPosts, inputValue]);

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
      placeholder={`Buscar conteúdo (mínimo de ${SEARCH_MIN_LENGTH} caracteres)`}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      ref={inputElement}
      className={props.className || ''}
    />
  );
};

export default SearchInput;
