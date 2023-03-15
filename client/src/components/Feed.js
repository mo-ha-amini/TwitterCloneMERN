import React from 'react';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed({ user, tweets }) {
  return (
    <div className="feed">
      <div className="feed__header">
        <h3>Home</h3>
      </div>
      <TweetBox user={user}/>
      <Post/>
    </div>
  );
}

export default Feed;
