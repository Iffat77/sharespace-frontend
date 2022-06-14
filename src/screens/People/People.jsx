import React, { useEffect, useState } from 'react'
import './people.css'

export default function People() {
  const [users, setUsers] = useState([])
  let dummyData = [
    {
      name: "Stacey",
      image: "google.com/cat"
    },
    {
      name: "Lucas",
      image: "google.com/pringles"
    },
    {
      name: "Stacey",
      image: "google.com/cat"
    },
    {
      name: "pickles",
      image: "google.com/pringles"
    },
    {
      name: "patrick",
      image: "google.com/cat"
    },
    {
      name: "star",
      image: "google.com/pringles"
    },
  
  ]
  
  useEffect(() => {
    setUsers(dummyData)
  }, [setUsers])

  return (
    <div className='people-container'> 
      {users.map((user) => {
        return (
        <div className='person-container'>
          <img className='people-image'src={user.image} />
          <p className='people-name'>{user.name}</p>
        </div>
        )
      })}
    </div>
  )
}