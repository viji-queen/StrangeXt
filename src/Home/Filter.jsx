import React, { useState } from 'react'

function Filter({onFilterChange }) {
  const [ageFilter, setAgeFilter] =  useState(false)
  const [countryFilter, setCountryFilter] = useState(false)
  const handleFilterClick = (minAge, maxAge) => {
    onFilterChange(minAge, maxAge);
  };
  const handleAge= ()=>{
    setAgeFilter(true)
  }
  const handleCountry=()=>{
    setCountryFilter(true)
  }
  return (
    <>
    <div className='d-flex justify-content-center my-3'>
      
        <button className='btn btn-dark text-white p-1 px-2 mx-5 fw-bold' onClick={handleAge}>Filter by Age</button>

        <button className='btn btn-dark text-white p-1 px-2 mx-5 fw-bold' onClick={handleCountry}>Filter by Country</button>

     
    </div>
    <div className='d-flex justify-content-center my-3'>
      {ageFilter ? 
      <>
              <button className='btn btn-light text-black p-1 px-2 mx-5 ' onClick={() => handleFilterClick(0, 25)}>25 and below</button>
              <button className='btn btn-light text-black p-1 px-2 mx-5 ' onClick={() => handleFilterClick(25, 35)}>25-35</button>
              <button className='btn btn-light text-black p-1 px-2 mx-5 ' onClick={() => handleFilterClick(35, 45)}>35-45</button>
              <button className='btn btn-light text-black p-1 px-2 mx-5 ' onClick={() => handleFilterClick(40, 55)}>45-55</button>
              <button className='btn btn-light text-black p-1 px-2 mx-5 ' onClick={() => handleFilterClick(55, 65)}>55-65</button>
              <button className='btn btn-light text-black p-1 px-2 mx-5 ' onClick={() => handleFilterClick(65, 100)}>65 and above</button>

      </>:
      <></>  
      }
      </div>
    </>
  )
}

export default Filter