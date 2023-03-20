import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../Profile";
import { findByUsername } from '../../actions/user.action'

function UserProfile() {
  const params = useParams();
  const dispatch = useDispatch()

  const { loading, error, success, profile } = useSelector(
    (state) => state.findByUsername
  );

  useEffect(() => {
    if(error){
        console.log(error)
    }
    dispatch(findByUsername(params.username))
  }, [error, dispatch, params]);

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

export default UserProfile;
