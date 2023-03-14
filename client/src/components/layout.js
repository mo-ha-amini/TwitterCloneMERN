import React from 'react';
import '../css/style.css';
import { Helmet } from 'react-helmet';
import SideBar from './SideBar';
import Widgets from './Widgets';
import Messages from './Messages';

function layout({ children, user }) {
  return (
    <div className="container-large app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${'Home'} / Twitter`}</title>
      </Helmet>
      <SideBar user={user}/>
      {children}
      <Widgets />
      <Messages />
    </div>
  );
}

export default layout;
