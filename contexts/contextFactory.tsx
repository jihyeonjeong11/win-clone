import {
  type MemoExoticComponent,
  createContext,
  memo,
  useContext,
} from "react";

const contextFactory = <T,>(
  // in tsx file, you need to add comma after generic type syntax.
  useContextState: () => T,
  ContextComponent?: React.JSX.Element
): {
  Provider: MemoExoticComponent<FC>;
  useContext: () => T;
} => {
  const Context = createContext(Object.create(null) as T);

  return {
    Provider: memo<FC>(({ children }) => (
      <Context.Provider value={useContextState()}>
        {children}
        {ContextComponent}
      </Context.Provider>
    )),
    useContext: () => useContext(Context),
  };
};

export default contextFactory;
