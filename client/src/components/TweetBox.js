import React from 'react';
import { GoFileMedia } from '@react-icons/all-files/go/GoFileMedia';
import { AiOutlineFileGif } from '@react-icons/all-files/ai/AiOutlineFileGif';
import { BiPoll } from '@react-icons/all-files/bi/BiPoll';
import { GrEmoji } from '@react-icons/all-files/gr/GrEmoji';
import DeafaultImg from '../assets/default.png'

function TweetBox({ user }) {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <picture>
            {user.avatar ? (<img src={user.avatar} />)
                         : (<img src={DeafaultImg} />) }
          </picture>
          <input type="text" placeholder="What's happening ?" />
        </div>
        <div className="tweetBox__footer">
          <div className="tweetBox__icon">
            <GoFileMedia size={17} />
            <AiOutlineFileGif size={17} />
            <BiPoll size={17} />
            <GrEmoji size={17} />
          </div>
          <button className="tweetBox__btn">Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
