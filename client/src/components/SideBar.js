import React from 'react';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import Menu from './Menu';
import DeafaultImg from '../assets/default.png'

const SideBar = ({ user }) => {
  return (
    <div className="sideBar">
      <AiOutlineTwitter className="sideBar__TwitterIcon" />
      <Menu />
      <button className="sideBar__Btn">Tweet</button>

      <div className="follow" style={{marginTop: '20px'}}>
            <div className="follow__avatar">
            {user.avatar ? (<img src={user.avatar} style={{borderRadius: '50%'}}/>)
                         : (<img src={DeafaultImg} style={{borderRadius: '50%'}}/>) }
              <div className="follow__user" >
                <h4>{user.name}</h4>
                <span>@{user.username}</span>
              </div>
            </div>
      </div>
    </div>
  );
};

export default SideBar;

