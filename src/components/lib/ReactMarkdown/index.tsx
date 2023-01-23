import classNames from '@utils/classNames';
import LIBReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactMarkdownProps } from './types';

const ReactMarkdown = ({ children, ...props }: ReactMarkdownProps) => {
    return (
        <LIBReactMarkdown
            {...props}
            className={classNames(props.className || '')}
            children={children}
            remarkPlugins={[remarkGfm]}
        />
    );
};

export default ReactMarkdown;
