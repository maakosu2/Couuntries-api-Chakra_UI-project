import {createContext, useContext, useState} from "react";
import { useQuery } from "react-query";
import usequeryFetch from "../hooks/useFetch";
import useFetch from "../hooks/useFetch";

const FetctDataContext = createContext(undefined);

export const FetctDataProvider = ({ children }) => {
 
  
  const [isDark, setDark] = useState(false);
  const [searchQuery, SetSearchQuery]=useState("")
  const [RegionQuery, SetRegionQuery]=useState("")

  return (
    <FetctDataContext.Provider
      value={{
        colorValue:()=>isDark,
        colorSet:()=>setDark,
        searchQuery:()=>searchQuery,
        SetSearchQuery:()=>SetSearchQuery,
        RegionQuery:()=>RegionQuery,
        SetRegionQuery:()=>SetRegionQuery,
      }}
    >
      {children}
    </FetctDataContext.Provider>
  );
};

export const useFetchDataContext = () => useContext(FetctDataContext);
