import React, { Component } from 'react';

import ControlSideBar from '../component/ControlSideBar';
import FooterCredit from '../component/FooterCredit';
import NavBar from '../component/NavBar';
import Sidebar from '../component/Sidebar';
import Container from '../component/Container';

class Dashboard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <>
        <body className="hold-transition sidebar-mini layout-fixed">
          <div className="wrapper">
            <NavBar/>
            <Sidebar/>
            <Container/>
            <FooterCredit/>
            <ControlSideBar/>
          </div>
        </body>
      </>
    );
  }
}
export default Dashboard;