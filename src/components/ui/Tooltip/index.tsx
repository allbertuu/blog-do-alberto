'use client';

import * as RTooltip from '@radix-ui/react-tooltip';
import classNames from '@/utils/classNames';
import { TooltipProps } from './types';

/**
 * Renderiza um Radix Tooltip estilizado.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/tooltip
 *
 * @param content Conteúdo a ser exibido no tooltip
 * @param secondary Se o estilo do tooltip é secundário
 * @param children O elemento que será o trigger do tooltip
 * @returns O componente Tooltip
 */
const Tooltip: React.FC<TooltipProps> = ({ content, secondary, children }) => {
  return (
    <RTooltip.Root>
      <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
      <RTooltip.Portal>
        <RTooltip.Content
          sideOffset={5}
          className={classNames(
            secondary ? 'bg-blue-800' : 'bg-red-500/90',
            'rounded px-2 py-1 font-semibold text-white'
          )}
        >
          <p className="text-xs">{content || 'Sem informação'}</p>
          <RTooltip.Arrow height={3} className="fill-white" />
        </RTooltip.Content>
      </RTooltip.Portal>
    </RTooltip.Root>
  );
};

export default Tooltip;
