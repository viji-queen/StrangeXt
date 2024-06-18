import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { Button } from 'react-bootstrap';
import Filter from './Filter';

function AllHome() {
    const [users, setUsers] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredUsers, setFilteredUsers] = useState([])
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] =''
    console.log(currentIndex);
console.log(users)
    useEffect(()=>{
      const fetchData = async ()=>{
       try{
        const response = await fetch('https://randomuser.me/api/?nat=ind&results=10')
        const userDetails = await response.json()
        setUsers(userDetails.results)
        const uniqueCountries = [... new Set(userDetails.results.map(user=> user.location.country))]
        setCountries(uniqueCountries)
       } catch(err){
        console.log(err);
       }
      }
      fetchData()
    }, [])

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
    };
    const handleFilterChange =(minAge, maxAge)=>{
      const filtered = users.filter(user=>user.dob.age >= minAge && user.dob.age <= maxAge )
      setFilteredUsers(filtered)
    }
    const handleCountriesChange = ()=>{
      setSelectedCountry(selectedCountry)
    }
    console.log(countries);
  return (
    <>
    <Filter onFilterChange={handleFilterChange} countries={countries} onCountriesChange={handleCountriesChange} />{currentIndex}
    <div className="carousel-container">
    <button onClick={handlePrev} className="arrow left-arrow btn btn-dark" disabled={currentIndex <1}>&lt;</button>
    <div className='carousel'>
    <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 50}%)`, overflow: 'visible' }}
        >
    {filteredUsers.length >0 ? 

filteredUsers.map((u, index)=>(
   
   <UserCard 
   data-test-id= {`${u.login.username}`}
   key={u.login.username}
   fullname={`${u.name.title}. ${u.name.first} ${u.name.last}`}
   name ={u.name.first}
   img={u.picture.large}
   age={u.dob.age}
   city={u.location.city}
   country={u.location.country}
   email= {u.email}
   phone={u.phone}
   lat={u.location.coordinates.latitude}
   lng={u.location.coordinates.longitude}
   />
     ))

    :
    users.map((u, index)=>(
   
  <UserCard 
  key={u.login.username}
  fullname={`${u.name.title}. ${u.name.first} ${u.name.last}`}
  name ={u.name.first}
  img={u.picture.large}
  age={u.dob.age}
  city={u.location.city}
  country={u.location.country}
  email= {u.email}
  phone={u.phone}
  lat={u.location.coordinates.latitude}
  lng={u.location.coordinates.longitude}
  />
    ))
    }
    </div>
    </div>
    <button onClick={handleNext} className="arrow right-arrow btn btn-dark" disabled={filteredUsers.length >0 ?  currentIndex === filteredUsers.length/2 : currentIndex === users.length/2} >&gt;</button>
    </div>
    </>
  )
}

export default AllHome