import { useContext } from 'react';
import { PostsContext } from '@contexts/PostsContext';

const usePosts = () => useContext(PostsContext);

export default usePosts;
