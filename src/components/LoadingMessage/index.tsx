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
  const DEFAULT_MESSAGE = 'Carregando, aguarde...';
  const loadingMessage = message || DEFAULT_MESSAGE;

  return (
    <div
      className={classNames(
        props.className || '',
        'mx-auto flex w-fit flex-col items-center gap-2'
      )}
    >
      <p className="text-lg">{loadingMessage}</p>
      <SpinnerGapIcon size="1.8rem" className="animate-spin text-white" />
    </div>
  );
};

export default LoadingMessage;
