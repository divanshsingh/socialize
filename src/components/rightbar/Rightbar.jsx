import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'

const Rightbar = ({profile}) => {

  const HomeRightbar = ()=>{
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Amela Cruz</b> and <b>4 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h3 className="rightbarTitle">Online Friends</h3>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <li key={user.id} className="rightbarFriend">
              <div className="rightbarFriendOnline">
                <img
                  src={user.profilePicture}
                  alt=""
                  className="rightbarFriendImg"
                />
                <span className="rightbarFriendBatch"></span>
              </div>
              <span className="rightbarFriendName">{user.username}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  const ProfileRightbar = ()=>{
    return(
      <>
      <h3 className='rightbarUserInfoTitle'>User Information</h3>
        <ul className="rightbarUserInfo">
          <li className="rightbarUserInfoText"><b>City:</b> New York</li>
          <li className="rightbarUserInfoText"><b>From:</b> Madrid</li>
          <li className="rightbarUserInforText"><b>Relationship:</b> Single</li>
        </ul>
        <h3 className='rightbarUserInfoTitle'>User Friends</h3>
        <div className="rightbarFollowings">
          {Users.map((user)=>(
          <div key={user.id} className="rightbarFollowing">
            <img src={user.profilePicture} alt="" className='rightbarFollowingImg'/>
            <span className='rightbarFollowingName'>{user.username}</span>
          </div>
          ))}
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
