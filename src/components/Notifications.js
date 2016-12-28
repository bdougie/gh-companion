import React, {Component, PropTypes} from "react";
import {createContainer} from "react-transmit";
import {fetchUserNotifications} from "../lib/gitHubApi.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {formatTime} from "../helpers/formatHelpers";

class Notifications extends Component {
  render() {
    const {data} = this.props;

    return (
      <MuiThemeProvider>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Subject</TableHeaderColumn>
              <TableHeaderColumn>Repo</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data && data.map((item, i) => (
              <TableRow key={i}>
                <TableRowColumn>{item.subject.type}</TableRowColumn>
                <TableRowColumn>{item.subject.title}</TableRowColumn>
                <TableRowColumn>{`${item.repository.owner.login}/${item.repository.name}`}</TableRowColumn>
                <TableRowColumn>{formatTime(item.updated_at)}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default createContainer(Notifications, {
  initialVariables: {},
  fragments: {
    data: () => fetchUserNotifications().then(res => res.data),
  }
})

Notifications.propTypes = {
  data: PropTypes.array,
};
