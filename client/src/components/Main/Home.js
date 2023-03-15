// import shine from "../assets/shine.svg";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "../../actions/user.action";
import { feedTweets } from '../../actions/tweets.action'
import Layout from "../layout";

import Post from "../Post";
import TweetBox from '../TweetBox'

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.auth
  );

  const { success, loading:feedLoading , tweets, error:feedError } = useSelector((state) => state.feedtweets);

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

  console.log(tweets.results)
  return (
    <div>
      <Fragment>
        {user ? (
          <Layout user={user}>
            <div className="feed">
                <div className="feed__header">
                  <h3>Home</h3>
                </div>
                <TweetBox user={user}/>
                <Post Posts={tweets.results}/>
            </div>
          </Layout>
        ) : (
          navigate("/")
        )}
      </Fragment>
    </div>
  );
}

export default Home;
