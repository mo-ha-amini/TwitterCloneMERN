// import shine from "../assets/shine.svg";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "../../actions/user.action";
import { feedTweets } from '../../actions/tweets.action'
import Layout from "../layout";

import Feed from "../Feed";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.auth
  );

  const { success, loading:feedLoading , tweets, error:feedError } = useSelector((state) => state.feedTweets);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
 
    if (feedError) {
      console.log(feedError);
    }

    dispatch(loadUser());
    dispatch(feedTweets())
  }, [dispatch, error, feedError]);

  // console.log(tweets.results)
  return (
    <div>
      <Fragment>
        {user ? (
          <Layout key={user._id} user={user}>
            <Feed user={user} tweets={tweets.results}/>
          </Layout>
        ) : (
          navigate("/")
        )}
      </Fragment>
    </div>
  );
}

export default Home;
