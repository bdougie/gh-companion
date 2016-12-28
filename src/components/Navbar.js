import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createContainer} from "react-transmit";
import {fetchUserData} from "../lib/gitHubApi.js";


// Move this when a decision is made on styling, CSS modules or
// styled-components
const style = {borderRadius: 5, marginTop: 10};

const Navbar = ({data}) => (
  <MuiThemeProvider>
    <AppBar
      title={data.login}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    >
      <Avatar style={style} src={data.avatarURL} />
    </AppBar>
  </MuiThemeProvider>
);

export default createContainer(Navbar, {
  initialVariables: {},
  fragments: {
    data: () => fetchUserData().then(res => res.data.data.viewer),
  }
})

Navbar.propTypes = {
  data: PropTypes.object,
};
