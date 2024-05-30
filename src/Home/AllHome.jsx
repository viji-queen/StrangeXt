import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

function AllHome() {
    const [users, setUsers] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
      const fetchData = async ()=>{
       try{
        const response = await fetch('https://randomuser.me/api/?nat=ind&results=50')
        const userDetails = await response.json()
        setUsers(userDetails.results)
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

  return (
    <>
    <div className="carousel-container">
    <button onClick={handlePrev} className="arrow left-arrow">&lt;</button>
    <div className='carousel'>
    <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 50}%)`, overflow: 'visible' }}
        >
    {
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
    <button onClick={handleNext} className="arrow right-arrow">&gt;</button>
 
    </div>
    </>
  )
}

export default AllHome