import API from '@services/api';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IPostData, PostLoaderProps } from './types';

/**
 * Carrega os dados de um post específico (GitHub Issues).
 *
 * @param postId Número do post (issue) no GitHub
 */
const PostLoader: React.FC<PostLoaderProps> = ({ children }) => {
    const [postData, setPostData] = useState<IPostData | null>(null);
    const router = useRouter();
    const { postId } = router.query;

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await API.get(
                    `/repos/allbertuu/blog-do-alberto/issues/${postId}`,
                );

                setPostData(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        if (postId) fetchPostData();
    }, [postId]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    return React.cloneElement(child, { postData });
                }
                return child;
            })}
        </>
    );
};

export default PostLoader;
