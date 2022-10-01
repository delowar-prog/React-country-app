import React, {useState, useEffect} from 'react';
import './App.css';
import Countries from './component/Countries';
import Search from './component/Search';
const url="https://restcountries.com/v3.1/all";
function App() {
  const [countries, setCountries]=useState([]);
  const [filterCountries, setFilterCountries]=useState(countries);
  const [isLoading, setIsLoading]=useState(true);
  const [error, setError]=useState(null);

const fetchData=async (url)=>{
  setIsLoading(true);
try {
  const response=await fetch(url);
  const data=await response.json();
  setCountries(data);
  setFilterCountries(data);
  setIsLoading(false)
  setError(null)
} catch (error) {
  setIsLoading(false)
  setError(error)
}
}

  useEffect(()=>{
   fetchData(url);
  },[])
  const hendleRemoveCountry=(name)=>{
    const filterData=filterCountries.filter((country)=>country.name.common!=name);
    setFilterCountries(filterData);
  }
  const handleSearch=(text)=>{
    const searchValue=text.toLowerCase();
    const countriesAfterSearch=filterCountries.filter((country)=>{
        const countryName=country.name.common.toLowerCase();
      return countryName.startsWith(searchValue);
    })
    setFilterCountries(countriesAfterSearch);
  }
  return (
    <>
      <h2>Country App</h2>
      <Search onSearch={handleSearch}/>
      {isLoading && <h2>Loading..</h2>}
      {error && <h2>{error.message}</h2>}
      <Countries countries={filterCountries} onRemoveCountry={hendleRemoveCountry}/>
    </>
  );
}

export default App;
