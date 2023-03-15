// import shine from "../assets/shine.svg";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "../../actions/user.action";
import { feedTweets } from '../../actions/tweets.action'
import Layout from "../layout";

<<<<<<< HEAD
import Post from "../Post";
import TweetBox from '../TweetBox'
=======
import Feed from "../Feed";
>>>>>>> fixfeed

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.auth
  );

<<<<<<< HEAD
  const { success, loading:feedLoading , tweets, error:feedError } = useSelector((state) => state.feedtweets);
=======
  const { success, loading:feedLoading , tweets, error:feedError } = useSelector((state) => state.feedTweets);
>>>>>>> fixfeed

  useEffect(() => {
    if (error) {
      console.log(error);
    }
 
    if (feedError) {
      console.log(feedError);
    }

<<<<<<< HEAD
    if (feedError) {
      console.log(feedError);
    }
=======
    dispatch(loadUser());
    dispatch(feedTweets())
  }, [dispatch, error, feedError]);

  // console.log(tweets.results)
>>>>>>> fixfeed

    dispatch(loadUser());
    dispatch(feedTweets())
  }, [dispatch, error, feedError]);

  console.log(tweets.results)
  return (
    <div>
      <Fragment>
        {user ? (
<<<<<<< HEAD
          <Layout user={user}>
            <div className="feed">
                <div className="feed__header">
                  <h3>Home</h3>
                </div>
                <TweetBox user={user}/>
                <Post Posts={tweets.results}/>
            </div>
=======
          <Layout key={user._id} user={user}>
            <Feed user={user} tweets={tweets.results}/>
>>>>>>> fixfeed
          </Layout>
        ) : (
          navigate("/")
        )}
      </Fragment>
    </div>
  );
}

export default Home;
