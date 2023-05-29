import React, { useState, useEffect, FC } from 'react';
import { IPostData, PostLoaderProps } from './types';
import API from '@services/api';

/**
 * Carrega os dados de um post específico (GitHub Issues).
 *
 * @param postId Número do post (issue) no GitHub
 */
const PostLoader: FC<PostLoaderProps> = ({
    children,
    postId,
}) => {
    const [postData, setPostData] = useState<IPostData | null>(null);

    useEffect(() => {
      const fetchPostData = async () => {
        try {
          const response = await API.get(`/repos/allbertuu/blog-do-alberto/issues/${postId}`);
          setPostData(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchPostData();
    }, [postId]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // @ts-ignore
                    return React.cloneElement(child, { postData });
                }
                return child;
            })}
        </>
    );
};

export default PostLoader;
