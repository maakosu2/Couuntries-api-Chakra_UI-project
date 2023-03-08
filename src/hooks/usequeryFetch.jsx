import {useState} from "react";
import axios from "axios";
import { useQuery } from "react-query";


 /**
 the custom uses useQuery for providing functionality to the fetch function 
 however custom hooks has its its filter section removed to to prevent excess API calls 
 the filter is however implemented in another custom hooks the useCountryFilter.
 */

const useFetch= (baseURL)=>{
    return axios.get(baseURL)
  }
const baseURLAddress= "https://restcountries.com/v2/all";
export default function usequeryFetch(baseURL=baseURLAddress, QueryName="data-fetching",searchQuery="",RegionQuery="") {
 return useQuery(`${QueryName}`,()=> useFetch(baseURL),
  {select:(data)=>{
      const countryData = data?.data
      return countryData
    }
  })}




