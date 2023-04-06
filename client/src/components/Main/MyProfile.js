import React, { Fragment, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../assets/style/react-tabs.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, findProfileById } from "../../actions/user.action";
import { feedTweets, profileUsersTweets } from "../../actions/tweets.action";
import { follow, unFollow } from "../../actions/profile.action";
import Layout from "../layout";
import Post from "../Post";
import banner from "../../assets/dfeaultBanner.png";
import DeafaultImg from "../../assets/default.png";

function MyProfile({ profile }) {
  // const [followButton, setFollowButton] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.auth
  );

  const { profile: profileFollow } = useSelector((state) => state.follow);

  const {
    loading: profileLoading,
    error: profileError,
    authprofile,
  } = useSelector((state) => state.findProfileById);

  const {
    success,
    // loading: feedLoading,
    tweets,
    error: feedError,
  } = useSelector((state) => state.profileTweets);

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (feedError) {
      console.log(feedError);
    }

    dispatch(loadUser());
    dispatch(findProfileById(user._id));
    dispatch(profileUsersTweets(user._id));

  }, [dispatch, error, feedError]);

  // console.log(tweets)

  return (
    <Fragment>
      {authprofile && user && tweets && (
        <Layout user={user}>
          <div className="feed">
            <div className="feed__header">
              <h3>{authprofile.user.name}</h3>
            </div>

            <div>
              <img src={banner} style={{ width: "100%" }} />
            </div>

            <div style={{ padding: "25px" }}>
              <div style={{ position: "relative", marginBottom: "0" }}>
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
                  {authprofile.user.avatar ? (
                    <img
                      src={authprofile.user.avatar}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <img
                      src={DeafaultImg}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  )}

                  {/* <img
                    src={profilePic}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  /> */}
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
                        background: "white",
                        color: "black",
                        fontSize: "16px",
                        width: "80px",
                        height: "30px",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid #ecf1f2",
                      }}
                    >
                      Edit
                    </button>
                </div>

                <div style={{ marginTop: "35px", marginBottom: "0" }}>
                  <h3>{authprofile.user.name}</h3>

                  <p style={{ color: "gray" }}>@{authprofile.user.username}</p>
                    <ul style={{ display: "flex", padding: "0" }}>
                      <li
                        style={{
                          width: " 33%",
                          height: "40px",
                          transition: "all .3s",
                        }}
                      >
                        <h5
                          style={{
                            color: " black",
                            display: "flex",
                            alignItems: "center",
                            height: " 100%",
                            justifyContent: "left",
                          }}
                        >
                          {authprofile.following.length} Following
                        </h5>
                      </li>

                      <li
                        style={{
                          width: " 33%",
                          height: "40px",
                          transition: "all .3s",
                        }}
                      >
                        <h5
                          style={{
                            color: " black",
                            display: "flex",
                            alignItems: "center",
                            height: " 100%",
                            justifyContent: "left",
                          }}
                        >
                          {authprofile.followers.length} Followers
                        </h5>
                      </li>
                    </ul>

                  {/* <p style={{ marginBottom: "20px" }}>
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
                      <i className="fa-solid fa-location-dot"></i>
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
                      <i className="fa-solid fa-link"></i>
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
                      <i className="fa-solid fa-calendar"></i>
                      <p>Joined May 2016</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* <ul style={{ display: "flex", padding: "0" }}>
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
            </ul> */}
            <Tabs style={{ padding: "25px" }}>
              <TabList>
                <Tab>Tweets</Tab>
                <Tab>Likes</Tab>
              </TabList>

              <TabPanel>
                {tweets.results &&
                  tweets.results.map((tweet) => (
                    <Post key={tweet._id} post={tweet} authUser={authprofile.user}/>
                  ))}
              </TabPanel>
              <TabPanel>
                <h6>likes</h6>
              </TabPanel>
            </Tabs>

            {/* {tweets.results &&
              tweets.results.map((tweet) => (
                <Post key={tweet._id} post={tweet} />
              ))} */}
          </div>
        </Layout>
      )}
    </Fragment>
  );
}

export default MyProfile;
