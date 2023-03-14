import React from 'react';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed({ user }) {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox user={user}/>
      <Post />
    </div>
  );
}

export default Feed;
