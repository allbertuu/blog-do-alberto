import React, { useState, useEffect, FunctionComponent } from 'react';
import { PostLoaderProps } from './types';
import API from '@services/api';

/**
 * Carrega os dados de um post específico (GitHub Issues).
 *
 * Utiliza "Container component pattern".
 *
 * @param postId Número do post (issue) no GitHub
 */
const PostLoader: FunctionComponent<PostLoaderProps> = ({
    children,
    postId,
}) => {
    const [postData, setPostData] = useState(null);

    const getPostData = async () => {
        try {
            const res = await API.get(
                `/repos/allbertuu/blog-do-alberto/issues/${postId}`,
            );
            setPostData(res.data);
        } catch (error: any) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

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
