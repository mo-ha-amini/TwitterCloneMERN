import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../Profile";
import { findByUsername } from '../../actions/user.action'
import { loadUser } from "../../actions/user.action";


function MyProfile() {
  const dispatch = useDispatch()

  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.auth
  );
  const { loading:profileLoading, error:profileError, success, profile } = useSelector(
    (state) => state.findByUsername
  );

 useEffect(() => {
    if (error) {
      console.log(error);
    }

    dispatch(loadUser());
    dispatch(findByUsername(user.username))

  }, [dispatch,error ]);

  // console.log('Profile in my', profile)


  return (
    <Fragment>
      {profile ? (
      <Profile profile={profile}/>) : (
        <Fragment>
          <h4>error: Profile not found! </h4>
        </Fragment>
      )}
    </Fragment>
  );
}

export default MyProfile;
