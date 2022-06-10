import { useEffect, useState } from 'react'

// import { Link } from "react-router-dom";

export default function ProfileComp({ profile, user, username }) {

  return (
    <div className="profile-containers">
      <h1>Profile Comp</h1>
      {/* <h3 className="name-heading">{user.username}</h3> */}
      <h3 className="name-heading2">{profile.username}</h3>
      <h3 className="profile-component-name">{profile.first_name}</h3>
      <p className="profile-component-bio">{profile.about}</p>
      <div>

      </div>
      {/* </div> */}
    </div>
  );
  // console.log(user)
  
  // return (
  //   <div className='user-container'>

  //         <div className='user-info-container'>
  //           <img src={user.image} className='user-box-img'/>
  //           <h3>{user.name}</h3>
  //           <p>{user.birthay}</p>
  //           <p>{user.location}</p>
  //           <p>{user.bio}</p>
  //           <p>{user.profession}</p>
  //           <a href={user.link} target="_blank">{user.link}</a>
  //         </div>
      

      
  //   </div>
  // )


}