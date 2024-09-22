import React from 'react'
import './topbar.css'
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Topbar = () => {
  return (
    <div className='topbarContainer'> 
      <div className="topbarLeft">
      <Link to="/" style={{textDecoration: "none", color: "white"}}>
        <span className="logo">Socialize</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon />
          <input placeholder='Search for peole, place or post' className='searchInput' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/" style={{textDecoration: "none", color: "white"}}>
          <span className="topbarLink">Home</span>
        </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MessageIcon />
            <span className="topbarIconBadge">2</span>
        </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">4</span>
          </div>
        </div>
        <Link to="/profile">
        <img src="/assets/person/10.jpeg" alt="" className='topbarImg' />
        </Link>
      </div>
    </div>
  )
}

export default Topbar
