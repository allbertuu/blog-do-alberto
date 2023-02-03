import classNames from '@utils/classNames';
import { SpinnerGap as SpinnerGapIcon } from 'phosphor-react';
import { FunctionComponent } from 'react';
import { LoadingMessageProps } from './types';

/**
 * Renderiza uma mensagem de carregamento com um ícone de carregamento.
 *
 * @param message Mensagem de carregamento. Padrão: 'Carregando, aguarde...'
 * */
const LoadingMessage: FunctionComponent<LoadingMessageProps> = ({
    message,
    ...props
}) => {
    const loadingMessage = message || 'Carregando, aguarde...';

    return (
        <div
            className={classNames(
                props.className || '',
                'w-fit mx-auto flex flex-col gap-2 items-center',
            )}
        >
            <p className="text-lg">{loadingMessage}</p>
            <SpinnerGapIcon size="1.8rem" className="text-white animate-spin" />
        </div>
    );
};

export default LoadingMessage;
