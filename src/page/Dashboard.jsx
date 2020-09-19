import React from "react";

import { Loading, Header, Home, Hello, Profile, Dashboardlayout, EditProfile, ProfileInfo, Transplant} from "../component/index";
import { NavLink, Switch ,Route, Link } from 'react-router-dom';

import { userApi } from "../utils/api/index";
import { useEffect } from "react";
import Family from "../component/Family";
import Form from "../froms/Form";
import Dumy from "../component/Dumy";
import Cadover from "../cadover/Cadover";
import PairedDoner from "../paired/PairedDoner";

const Dashboard = ({match}) => {

  const getMe = () => {
    userApi.getMe()
  }

  useEffect(()=>{
   const __ = unescape(atob((localStorage.getItem('logged_'))))
  },[])

  return (
    <div style={{overflowY: 'hidden'}}>
      <Header match="/dashboard"/>
      {/* Main content */}
      <div className="main-content" id="panel">
        {/* Topnav */}
        <Home/>
        {/* <Link to={`${match.path}/`}>Profie</Link>
        <Link to={`${match.path}/hello`}>Hello</Link>
        <Link to={`${match.path}/profile`}>Profie</Link> */} 

        <Switch>
          <Route path={`${match.path}/cadover`} component={Cadover} />
          <Route path={`${match.path}/paired`} component={PairedDoner}/>
          <Route path={`${match.path}/transplant`} component={Transplant} />
          <Route path={`${match.path}/family`} component={Dumy}/>
          <Route path={`${match.path}/create`} component={Profile}/>
          <Route path={`${match.path}/profile`} component={ProfileInfo}/>
          <Route path={`${match.path}/`} component={Dashboardlayout}/>
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;