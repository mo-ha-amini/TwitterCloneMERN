import React from 'react';
import { FaRegComment } from '@react-icons/all-files/fa/FaRegComment';
import { AiOutlineRetweet } from '@react-icons/all-files/ai/AiOutlineRetweet';
import { BiHeart } from '@react-icons/all-files/bi/BiHeart';
import { FiShare } from '@react-icons/all-files/fi/FiShare';
import DeafaultImg from '../assets/default.png'
// import Posts from '../api/post.json';

function Post({Posts}) {
  return (
    <>
      {Posts.map((post) => (
        <div key={post._id}>
          <div className="post">
            <div className="post__avatar">
              {/* <img src={post.author.avatar} alt="" /> */}
              {post.author.avatar ? (<img src={post.author.avatar} />)
                         : (<img src={DeafaultImg} />) }
            </div>
            <div className="post__body">
              <div className="post__header">
                <div className="post__headerText">
                  <h3>
                    {post.author.name}
                    <span className="post__headerSpecial">@{post.author.username}</span>
                    <span>{Math.round(((Date.now() - Date.parse(post.createdAt ) )/ 1000 )/ 60)} min ago</span>
                  </h3>
                </div>
                <div className="post__headerDescription">
                  <p>{post.text}</p>
                </div>
              </div>
              {post.photo && <img src={post.photo} alt="" />}
              <div className="post__footer">
                <FaRegComment className="post__iconblue" />
                <AiOutlineRetweet className="post__icongreen" />
                <BiHeart className="post__iconred" />
                <FiShare className="post__iconblue" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
