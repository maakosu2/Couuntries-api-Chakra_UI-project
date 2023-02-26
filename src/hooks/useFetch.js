import {useState} from "react";
import axios from "axios";
import { useQuery } from "react-query";
/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */

 /**
 The response variable is used to store the  values for responds from the API call from the country API
 The isLoading variable is used to store the value for setting the Loading phase / Element
 The isError variable is used to store the value for setting if an Error occurs during an API call
 The isNotAvailableData variable is used to store if response return an empty data array but was not as a results of an error.
 */

 export const useFetch= (baseURL)=>{
    return axios.get(baseURL)
  }




export default function usequeryFetch(baseURL,searchQuery,RegionQuery) {
 return useQuery("country-data",()=> useFetch(baseURL),
  {

    select:(data)=>{
      const countryData = data?.data.filter(item => {
        return (
          (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
       &&  (RegionQuery ? item.region.toLowerCase()=== RegionQuery.toLowerCase() : true
        ))
      
      })
      return countryData
    }
  }
  
  )
  
 
  
}




