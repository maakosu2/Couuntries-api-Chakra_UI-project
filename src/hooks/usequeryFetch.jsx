import {useState} from "react";
import axios from "axios";
import { useQuery } from "react-query";


 /**
 the custom uses useQuery for providing functionality to the fetch function 
 however custom hooks has its its filter section removed to to prevent excess API calls 
 the filter is however implemented in another custom hooks the useCountryFilter.
 */

 export const useFetch= (baseURL)=>{
    return axios.get(baseURL)
  }




export default function usequeryFetch(baseURL, QueryName="data-fetching",searchQuery="",RegionQuery="") {


  //if only the baseURL argument is provided, all the data is returned
 /*  baseURL is the arugment input for URL,
  the QueryName arugment input is used as the name identifier for the query 
  the searchQuery arugment input for country search parameter, if filtering is to be implemented within the hooks
  the RegionQuery arugment input for Region search parameter, if filtering is to be implemented within the hooks */
  
 return useQuery(`${QueryName}`,()=> useFetch(baseURL),
  {

    select:(data)=>{
     
      const countryData = data?.data/* .filter(item => {
        
        return (
          (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
       &&  (RegionQuery ? item.region.toLowerCase()=== RegionQuery.toLowerCase() : true
        ))
      
      }) */
      return countryData
    }
  }
  
  )
  
 
  
}




