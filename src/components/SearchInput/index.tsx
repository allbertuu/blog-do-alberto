import { useDebounce, usePosts } from '@hooks/index';
import API from '@services/api';
import { useEffect, useRef, useState } from 'react';
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

  const getFilteredPosts = async () => {
    try {
      const res = await API.get('/search/issues', {
        params: {
          q: `${inputValue} repo:allbertuu/blog-do-alberto`,
        },
      });

      // TODO: usar graphQL para filtrar os dados
      // Filtra os dados para pegar apenas os posts (issues) e não os pull requests
      const filteredPosts = res.data.items
        .filter((item: any) => !Object.hasOwn(item, 'pull_request'))
        .map((post: any) => {
          return {
            id: post.id,
            title: post.title,
            body: post.body,
            createdAt: post.created_at,
            number: post.number,
          };
        });
      if (filteredPosts.length === 0) {
        toast.warn('Vish! O Alberto tá preguiçoso, ainda não fez esse post.');
        setPosts([]);
        return;
      }

      toast.success('Boaaa! Achei aqui! 🎉', { autoClose: 1500 });
      setPosts(filteredPosts);
    } catch (error: any) {
      toast.error(
        <>
          Desculpa, não deu para pesquisar. Erro interno 🔎
          <br />
          <small>{error.message}</small>
        </>
      );
    }
  };

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
      placeholder={`Buscar conteúdo (mínimo de ${SEARCH_MIN_LENGTH} caracteres)`}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      ref={inputElement}
      className={props.className || ''}
    />
  );
};

export default SearchInput;
