import { useEffect, useState } from "react";
import './profileComp.css';

// import { Link } from "react-router-dom";

export default function ProfileComp({ profile, user, username }) {
  return (
    <div className="profile-container">
      <div className="profile-info-container">
        <h1>Profile Comp</h1>
        {/* <img src={profile.image} className='profile-box-img'> </img> */}
        <h3 className="name-heading2">{profile.username}</h3>
        <h3 className="profile-component-name">{profile.first_name}</h3>
        <p className="profile-component-bio">{profile.about}</p> 
      </div>
    </div>
  );
}
