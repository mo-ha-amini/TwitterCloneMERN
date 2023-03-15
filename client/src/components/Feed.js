import React from 'react';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed({ user, tweets }) {
  return (
    <div className="feed">
        <div className="feed__header">
          <h3>Home</h3>
        </div>
        <TweetBox key={user._id} user={user}/>

        { tweets && tweets.map(tweet =>(
            <Post key={tweet._id} post={tweet} col={4}/>
        ))}

    </div>
  );
}

export default Feed;
