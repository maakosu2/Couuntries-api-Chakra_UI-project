import {useState} from "react";

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useFetch= (baseURL)=>{
 /**
 The response variable is used to store the  values for responds from the API call from the country API
 The isLoading variable is used to store the value for setting the Loading phase / Element
 The isError variable is used to store the value for setting if an Error occurs during an API call
 The isNotAvailableData variable is used to store if response return an empty data array but was not as a results of an error.
 */

  const Fetch=async()=>{
    setLoading(true)
   try {
    let response= await axios.get(baseURL)
    let data=await response.data
    setResponse( data)
   } catch (error) {
    setError=(true)
   } 
   finally{
    setLoading(false)
   }
  }
  return {response,isLoading,isError}
}

export default useFetch;
