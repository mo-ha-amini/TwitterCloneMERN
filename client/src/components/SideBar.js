import React, {useEffect } from 'react';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import Menu from './Menu';
import DeafaultImg from '../assets/default.png'
import { logoutUser } from '../actions/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {IoMdLogOut} from '@react-icons/all-files/io/IoMdLogOut'

const SideBar = ({ user }) => {
  const {loading, success, error} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    // if(success){
    //     navigate('/login')
    // }
    if(error){
      console.log(error)
    }
  })

  const logoutHandler = ()=> {
    dispatch(logoutUser())
  }
  return (
    <div className="sideBar">
      <AiOutlineTwitter className="sideBar__TwitterIcon" />
      <Menu />
      <button className="sideBar__Btn">Tweet</button>

      <div className="follow" style={{marginTop: '20px'}}>
        <Link to={`/me`}>
            <div className="follow__avatar">
            {user.avatar ? (<img src={user.avatar} style={{borderRadius: '50%'}}/>)
                         : (<img src={DeafaultImg} style={{borderRadius: '50%'}}/>) }
              <div className="follow__user" >
                <h5>{user.name}</h5>
                <span>@{user.username}</span>
              </div>
              
            </div>
            </Link>
            <Link to={'/login'} onClick={logoutHandler}>
              Logout
            </Link>
      </div>
    </div>
  );
};

export default SideBar;

