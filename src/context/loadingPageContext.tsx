import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface ILoadingPageContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface LoadingPageContextProps {
  children: ReactNode;
}

export const LoadingPageContext = createContext({} as ILoadingPageContext);

export const LoadingPageContextProvider = ({
  children,
}: LoadingPageContextProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    isLoading,
    setIsLoading,
  };

  return (
    <LoadingPageContext.Provider value={value}>
      {children}
    </LoadingPageContext.Provider>
  );
};
