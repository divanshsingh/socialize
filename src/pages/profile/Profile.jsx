import React, { useState } from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'


const Profile = () => {
  return (
    <>
        <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profleRightTop">
                <div className="profileCover">
                    <img src="/assets/post/8 (1).jpeg" alt="" className="profileCoverImg" />
                    <img src="/assets/person/10.jpeg" alt="" className="profileAvatarImg" />
                </div>
                <div className="profileInfo">
                    <h1 className="profileInfoName">Anni Gomex</h1>
                    <span className="profileInfoDesch">World is beautiful just see it.</span>
                </div>
            </div>
            <div className="profleRightBottom">
          <Feed />
          <Rightbar profile={true}/>  
            </div>
        </div>
      </div>
    </>
  );
}

export default Profile
