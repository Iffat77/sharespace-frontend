import React, { useEffect, useState } from 'react'
import './userbox.css'

export default function Userbox() {
  const [User, setUser] = useState([])

  let dummyData = [{
    name: "Stacey",
    image: "https://www.insidehook.com/wp-content/uploads/2021/09/emoji.jpg?fit=1200%2C800",
    birthay: "04/22/1992",
    location: "New York",
    bio: "ipsem whatever the other words were that I really dont Know.",
    profession: "a smiler",
    link: "google.com/cats"
  }]
   
  useEffect(() => {
    setUser(dummyData)
  }, [setUser])
  
  return (
    <div className='user-container'>
      {User.map((user) => {
        return (
          <div className='user-info-container'>
            <img src={user.image} className='user-box-img'/>
            <h3>{user.name}</h3>
            <p>{user.birthay}</p>
            <p>{user.location}</p>
            <p>{user.bio}</p>
            <p>{user.profession}</p>
            <a href={user.link} target="_blank">{user.link}</a>
          </div>
      )})

      }
    </div>
  )
}
