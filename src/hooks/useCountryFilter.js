
const useCountryFilter=(countryName,ApiData)=> {
        return ApiData?.filter(item => {
          return (
          item.alpha3Code.toLowerCase()=== countryName.toLowerCase() )
         
        })[0]
        }
    

      

// using the input from the search bar and the region bar
//  to filter the values of the data from the API

  



export default useCountryFilter;

  