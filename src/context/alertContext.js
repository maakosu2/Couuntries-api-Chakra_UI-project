import {createContext, useContext, useState} from "react";

const FetctDataContext = createContext(undefined);

export const FetctDataProvider = ({ children }) => {
 
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isNotAvailableData, setisNotAvailableData] = useState(false);

  return (
    <FetctDataContext.Provider
      value={{
        data:()=>response,
        SetData: (data) => setResponse(data),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </FetctDataContext.Provider>
  );
};

export const useAlertContext = () => useContext(FetctDataContext);
