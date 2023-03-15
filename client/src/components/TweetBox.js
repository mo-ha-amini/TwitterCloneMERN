import { GoFileMedia } from '@react-icons/all-files/go/GoFileMedia';
import { AiOutlineFileGif } from '@react-icons/all-files/ai/AiOutlineFileGif';
import { BiPoll } from '@react-icons/all-files/bi/BiPoll';
import { GrEmoji } from '@react-icons/all-files/gr/GrEmoji';
import DeafaultImg from '../assets/default.png'
import {newTweet} from '../actions/tweets.action'
import React, {useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function TweetBox({ user }) {

  const {success, loading, error} = useSelector(state=> state.newTweet)
  console.log('success',success)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [text,setText] = useState('')

  useEffect(()=>{
    if(error){
        console.log('error')
        // dispatch(cleanErrors())
    }
  } , [dispatch, success, error] )

  const submitHandler = (e) =>{
    e.preventDefault();

    let tweetData ={ text } 

    dispatch(newTweet(tweetData))
    {console.log(tweetData)}
  }

  const onChange = e =>{
    setText( e.target.value )
  } 


  return (
    <div className="tweetBox">
      <form onSubmit={submitHandler}>
        <div className="tweetBox__input">
          <picture>
            {user.avatar ? (<img src={user.avatar} />)
                         : (<img src={DeafaultImg} />) }
          </picture>
          <input 
              type="text" 
              placeholder="What's happening ?" 
              name='text'
              value={text}
              onChange={onChange}
            />
        </div>
        <div className="tweetBox__footer">
          <div className="tweetBox__icon">
            <GoFileMedia size={17} />
            <AiOutlineFileGif size={17} />
            <BiPoll size={17} />
            <GrEmoji size={17} />
          </div>
          <button className="tweetBox__btn" 
                  type="submit"
                  disabled = {loading ? true : false}
                >
                  Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
