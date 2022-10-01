import React from 'react'
import style from './country.module.css'
const Country = (props) => {
    const {name, population, capital, area, flags}=props.country;
    const removeCountry=(name)=>{
      props.onRemoveCountry(name);
    }
  return (
    <article className={style.countryItem}>
        <div>
            <img src={flags.png} alt={name.common}/>
            <h3>Country Name : {name.common}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Total Area :{area}</h3>
            <h3>Total Population : {population}</h3>
            <button onClick={()=>{removeCountry(name.common)}}>Remove Country</button>
        </div>
    </article>
        
  );
};

export default Country
