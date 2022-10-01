import React, {useState, useEffect} from 'react'
import style from './search.module.css'
const Search = (props) => {
    const [searchText, setSearchText]=useState("");

    const handleChange=(e)=>{
       const searchValue= e.target.value;
       setSearchText(searchValue);
    }
    useEffect(()=>{
        props.onSearch(searchText)
       }, [searchText])
  return (
    <div className={style.searchFiled}>
      <input type="text" placeholder="Search Country" value={searchText} onChange={handleChange}></input>
    </div>
  )
}

export default Search
