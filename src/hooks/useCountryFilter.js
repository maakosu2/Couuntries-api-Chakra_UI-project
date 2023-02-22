
import react, { useMemo } from 'react'
const useCountryFilter=(search,RegionInputValue,ApiData)=> {

    return  useMemo(()=>{
        return ApiData.filter(item => {
            return (
              (item.name.toLowerCase().includes(search.toLowerCase()))
           &&  (RegionInputValue ? item.region.toLowerCase()=== RegionInputValue.toLowerCase() : true
            ))
           
          })
        },[search, RegionInputValue,ApiData])
    
// using the input from the search bar and the region bar
//  to filter the values of the data from the API

  }



export default useCountryFilter;

  