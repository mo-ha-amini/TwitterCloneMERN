import React from 'react';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed({ user, tweets }) {
  return (
    <div className="feed">
<<<<<<< HEAD
      <div className="feed__header">
        <h3>Home</h3>
      </div>
      <TweetBox user={user}/>
      <Post/>
=======
        <div className="feed__header">
          <h3>Home</h3>
        </div>
        <TweetBox key={user._id} user={user}/>

        { tweets && tweets.map(tweet =>(
            <Post key={tweet._id} post={tweet}/>
        ))}

>>>>>>> fixfeed
    </div>
  );
}

export default Feed;
