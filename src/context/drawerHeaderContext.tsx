import { createContext, ReactNode, useRef } from "react";

export interface IDrawerHeaderContext {
  hideHeader: React.MutableRefObject<boolean>;
}

export interface DrawerHeaderProviderProps {
  children: ReactNode;
}

export const DrawerHeaderContext = createContext({} as IDrawerHeaderContext);

export const DrawerHeaderProvider = ({
  children,
}: DrawerHeaderProviderProps) => {
  const hideHeader = useRef(false);

  const value = {
    hideHeader,
  };

  return (
    <DrawerHeaderContext.Provider value={value}>
      {children}
    </DrawerHeaderContext.Provider>
  );
};
