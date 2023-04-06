import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../assets/style/react-tabs.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUser,
  findByUsername,
  findProfileById,
} from "../../actions/user.action";
import { feedTweets, profileUsersTweets } from "../../actions/tweets.action";
import { follow, unFollow } from "../../actions/profile.action";
import Layout from "../layout";
import Post from "../Post";
import banner from "../../assets/dfeaultBanner.png";
import profilePic from "../../assets/imgs/juan-pic.jpg";
import DeafaultImg from "../../assets/default.png";

function UserProfile() {
  const params = useParams();
  const dispatch = useDispatch();

  const [followButton, setFollowButton] = useState("Follow");

  const { loading: profileLoading, profile } = useSelector(
    (state) => state.findByUsername
  );
  const {
    isAuthenticated,
    user,
    loading: userLoading,
  } = useSelector((state) => state.auth);

  const { tweets } = useSelector((state) => state.profileTweets);

  const {
    loading: authLoading,
    error: profileError,
    authprofile,
  } = useSelector((state) => state.findProfileById);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(findByUsername(params.username));

    dispatch(findProfileById(user._id));
    dispatch(profileUsersTweets(profile.user._id));

    console.log(authprofile.following.includes(profile.user._id))

    if (authprofile.following.includes(profile.user._id)) {
      setFollowButton("Unfollow");
    }
    else{
      setFollowButton('Follow')
    }

  }, [dispatch, params]);

  const followUser = () => {
    dispatch(follow(profile.user._id));
    setFollowButton("Unfollow");
  };

  const unFollowUser = () => {
    dispatch(unFollow(profile.user._id));
    setFollowButton("Follow");
  };

  const followHandler = () => {
    // var value = document.getElementById("followButtonId").textContent;

    if (followButton === "Unfollow") {
      unFollowUser();
    }
    if (followButton === "Follow") {

      followUser();
    }
  };

  return (
    <Fragment>
      {userLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {authprofile && profile && user && tweets && (
            <Layout user={user}>
              {authLoading || profileLoading ? (
                <Loader />
              ) : (
                <div className="feed">
                  <div className="feed__header">
                    <h3>{profile.user.name}</h3>
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
                        {profile.user.avatar ? (
                          <img
                            src={profile.user.avatar}
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
                        {user._id === profile.user._id ? (
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
                        ) : (
                          <Fragment>
                            {authprofile.following.includes(
                              profile.user._id
                            ) ? (
                              <button
                                id="followButtonId"
                                style={{
                                  background: "black",
                                  // background: "white",
                                  // color: "red",
                                  color: "white",
                                  fontSize: "16px",
                                  width: "80px",
                                  height: "30px",
                                  borderRadius: "20px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  // border: "1px solid #ecf1f2",
                                }}
                                onClick={followHandler}
                              >
                                {followButton ? `${followButton}` : "Unfollow"}
                              </button>
                            ) : (
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
                                onClick={followHandler}
                              >
                                {followButton ? `${followButton}` : "Follow"}
                              </button>
                            )}
                          </Fragment>
                        )}
                      </div>

                      <div style={{ marginTop: "35px", marginBottom: "25px" }}>
                        <h3>{profile.user.name}</h3>

                        <p style={{ color: "gray" }}>
                          @{profile.user.username}
                        </p>
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
                              {profile.following.length} Following
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
                              {profile.followers.length} Followers
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

                  <Tabs style={{ padding: "25px" }}>
                    <TabList>
                      <Tab>Tweets</Tab>
                      <Tab>Likes</Tab>
                    </TabList>

                    <TabPanel>
                      {tweets.results &&
                        tweets.results.map((tweet) => (
                          <Post key={tweet._id} post={tweet} authUser={user}/>
                        ))}
                    </TabPanel>
                    <TabPanel>
                      <h6>likes</h6>
                    </TabPanel>
                  </Tabs>
                </div>
              )}
            </Layout>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default UserProfile;
