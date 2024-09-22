import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from '../../dummyData'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <RssFeedIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <ChatIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <PlayCircleIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <GroupIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <BookmarkIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <HelpOutlineIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Help</span>
          </li>
          <li className="sidebarListItem">
          <WorkIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
          <EventIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          <SchoolIcon className='sidebarListItemIcon'/>
          <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
      <hr className="sidebarLine" />
        <ul className="sidebarFriendList">
          {Users.map((user)=>(
          <li key={user.id} className="sidebarFriend">
            <img src={user.profilePicture} alt="" className='sidebarFriendiMG'/>
            <span className="sidebarFriendName">{user.username}</span>
          </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default Sidebar
