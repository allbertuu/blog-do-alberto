import classNames from '@utils/classNames';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { MarkdownProps } from './types';

export const Markdown = ({ children, ...props }: MarkdownProps) => {
  return (
    <ReactMarkdown
      {...props}
      className={classNames(props.className || '')}
      remarkPlugins={[remarkGfm]}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      rehypePlugins={[rehypeHighlight]}
    >
      {children}
    </ReactMarkdown>
  );
};
