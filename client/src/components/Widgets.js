import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";
import { FiMoreHorizontal } from "@react-icons/all-files/fi/FiMoreHorizontal";
import { FiSettings } from "@react-icons/all-files/fi/FiSettings";
import trends from "../api/trends.json";
import Follow from "./Follow";
import Button from "../ui/Button";
import Footer from "./Footer";
import { searchUser } from "../actions/user.action";
import DeafaultImg from "../assets/default.png";
import Loader from "./Loader";

function Widgets() {
  const [keyword, setKeyword] = useState("");

  const { loading, count, users, success, error } = useSelector(
    (state) => state.searchUser
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.log("error");
      // dispatch(cleanErrors())
    }
  }, [dispatch, error]);

  const onChange = (e) => {
    setKeyword(e.target.value);
    dispatch(searchUser(keyword));
  };

  return (
    <>
      <div className="widgest">
        <div className="widgest__input">
          <BiSearchAlt2 size={20} className="widgest__searchIcon" />

          <input
            type="text"
            placeholder="Search Twitter user"
            name="keyword"
            value={keyword}
            onChange={onChange}
          />
        </div>

        {keyword ? (
          <Fragment>
            {users && users.length > 0 ? (
              <div className="widgest__container">
                <div className="widgest__title">
                  <h2>Search Results</h2>
                </div>
                {loading ? (
                  <Loader />
                ) : (
                  <Fragment>
                    {users.map((user) => (
                      <Link to={`/user/${user.username}`}>
                        <div
                          className="widgest__top"
                          style={{ marginBottom: "15px" }}
                        >
                          {user.avatar ? (
                            <img src={user.avatar} />
                          ) : (
                            <img
                              src={DeafaultImg}
                              style={{
                                height: "40px",
                                width: "40px",
                                marginTop: "11px",
                                marginRight: "10px",
                                borderRadius: "50%",
                              }}
                            />
                          )}
                          <div className="widgest__trend">
                            <span>@{user.username}</span>
                            <h4>{user.name}</h4>
                          </div>
                          <div className="widgest__more">
                            <FiMoreHorizontal />
                          </div>
                        </div>
                      </Link>
                    ))}
                    {/* <Button /> */}
                  </Fragment>
                )}
              </div>
            ) : (
              <div className="widgest__container">
                <div className="widgest__title">
                  <h2>Search Results</h2>
                  {/* <FiSettings /> */}
                </div>
                <div className="widgest__top" style={{ marginBottom: "15px" }}>
                  <div className="widgest__trend">
                    <h4>Not Found</h4>
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <div className="widgest__container">
              <div className="widgest__title">
                <h2>Trends for you</h2>
                <FiSettings />
              </div>

              {trends.map((trend) => (
                <div className="widgest__top">
                  <div className="widgest__trend">
                    <span>{trend.trend}</span>
                    <h4>{trend.hastag}</h4>
                    <span>{trend.tweets}</span>
                  </div>
                  <div className="widgest__more">
                    <FiMoreHorizontal />
                  </div>
                </div>
              ))}
              <Button />
            </div>
            <Follow />
          </Fragment>
        )}

        <Footer />
      </div>
    </>
  );
}

export default Widgets;
