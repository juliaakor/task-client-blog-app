import { createContext, useContext, useState } from 'react';

import { PortalProviderProps } from './types';

const PortalContext = createContext<HTMLElement | null>(null);

export const PortalProvider = ({ children }: PortalProviderProps) => {
  const [portalRoot] = useState<HTMLElement>(() => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    return div;
  });

  if (!portalRoot) {
    throw new Error('Portal root could not be created');
  }

  return <PortalContext.Provider value={portalRoot}>{portalRoot ? children : null}</PortalContext.Provider>;
};

export const usePortal = () => {
  return useContext(PortalContext);
};
