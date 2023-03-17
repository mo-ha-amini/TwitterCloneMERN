import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../actions/user.action";
import { feedTweets } from "../../actions/tweets.action";
import Layout from "../layout";
import Post from "../Post";
import banner from "../../assets/imgs/jaun-banner.jpg";
import profilePic from "../../assets/imgs/juan-pic.jpg";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.auth
  );

  const {
    success,
    loading: feedLoading,
    tweets,
    error: feedError,
  } = useSelector((state) => state.feedTweets);

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (feedError) {
      console.log(feedError);
    }

    dispatch(loadUser());
    dispatch(feedTweets());
  }, [dispatch, error, feedError]);

  //   console.log('user: ',user);
  //   console.log('tweets',tweets)

  return (
    <Fragment>
      {user && tweets && (
        <Layout user={user}>
          <div className="feed">
            <div className="feed__header">
              <h3>Home</h3>
            </div>

            <div>
              <img src={banner} style={{ width: "100%" }} />
            </div>

            <div style={{ padding: "25px" }}>
              <div style={{ position: "relative", marginBottom: "5px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "-100px",
                    border: "5px solid white",
                    width: "150px",
                    height: " 150px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={profilePic}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    margin: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "1px solid #ecf1f2",
                      background: " withe",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "star",
                      marginRight: " 8px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      ...
                    </p>
                  </div>
                  <button
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "16px",
                      width: "80px",
                      height: "30px",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Follow
                  </button>
                </div>

                <div style={{ marginTop: "35px", marginBottom: "25px" }}>
                  <h3>💚🚀JuanDC: Juan David Castro ⚡️👨‍💻 ⚛️</h3>
                  <p style={{ color: "gray" }}>@fjuandc</p>
                  <p style={{ marginBottom: "20px" }}>
                    📚🍏 The Eternal Student
                    <br />
                    👨‍🏫 Course Director and Teacher in @Platzi
                    <br />
                    ✍️ Computer Science and Programming
                  </p>
                  <div>
                    <a style={{ color: "blue" }} href="">
                      #NuncaParesDeAprender
                    </a>
                    <p>💚🚀</p>
                  </div>
                  <div
                    style={{
                      //   display: "flex",
                      marginLeft: " 12px",
                      marginTop: " 0",
                      height: "20px",
                      color: "gray",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        textDecoration: "none",
                        marginRight: "12px",
                      }}
                    >
                      <i class="fa-solid fa-location-dot"></i>
                      <p>Bogotá, DC, Colombia</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        textDecoration: "none",
                        marginRight: "12px",
                      }}
                    >
                      <i class="fa-solid fa-link"></i>
                      <a href="https://platzi.com/profes/juandc/">
                        https://platzi.com/profes/juandc/
                      </a>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        textDecoration: "none",
                        marginRight: "12px",
                      }}
                    >
                      <i class="fa-solid fa-calendar"></i>
                      <p>Joined May 2016</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul style={{ display: "flex", padding: "0" }}>
              <li
                style={{
                  width: " 25%",
                  height: "40px",
                  transition: "all .3s",
                }}
              >
                <a
                  style={{
                    color: " black",
                    display: "flex",
                    alignItems: "center",
                    height: " 100%",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                  href=""
                >
                  Tweets
                </a>
              </li>
              <li
                style={{
                  width: " 25%",
                  height: "40px",
                  transition: "all .3s",
                }}
              >
                <a
                  style={{
                    color: " black",
                    display: "flex",
                    alignItems: "center",
                    height: " 100%",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                  href=""
                >
                  Tweets
                </a>
              </li>
              <li
                style={{
                  width: " 25%",
                  height: "40px",
                  transition: "all .3s",
                }}
              >
                <a
                  style={{
                    color: " black",
                    display: "flex",
                    alignItems: "center",
                    height: " 100%",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                  href=""
                >
                  Tweets
                </a>
              </li>
              <li
                style={{
                  width: " 25%",
                  height: "40px",
                  transition: "all .3s",
                }}
              >
                <a
                  style={{
                    color: " black",
                    display: "flex",
                    alignItems: "center",
                    height: " 100%",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                  href=""
                >
                  Tweets
                </a>
              </li>
            </ul>
            <hr />

            {tweets.results &&
              tweets.results.map((tweet) => (
                <Post key={tweet._id} post={tweet} />
              ))}
          </div>
        </Layout>
      )}
    </Fragment>
  );
}

export default Profile;
