// import shine from "../assets/shine.svg";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../../assets/default.png";
import { loadUser } from "../../actions/user.action";
import Layout from '../layout'
import Feed from '../Feed'


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [content, setContent] = useState("");
  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    }

  
    dispatch(loadUser());
  }, [dispatch, error]);

  return (
    <div>
        <Fragment>
            {user ? (
                <Layout user={user}>
                    <Feed user={user} />
                </Layout>
            ) :(
                navigate('/')
            )}
            
        </Fragment>
        
    </div>
  );
}

export default Home;
