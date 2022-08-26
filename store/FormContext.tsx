import React, { useState } from "react";

interface FormContext {
  display: boolean;
  setDisplay: () => void;
}

type Props = {
  children: JSX.Element;
};

type Display = boolean;

const DisplayContext = React.createContext<FormContext | null>(null);

export const DisplayContextProvider: React.FC<Props> = ({ children }) => {
  const [display, setDisplay] = useState<Display>(true);

  const changeDisplay = () => {
    setDisplay((prevState) => !prevState);
  };

  const context: FormContext = {
    display: display,
    setDisplay: changeDisplay,
  };

  return (
    <DisplayContext.Provider value={context}>
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayContext;
