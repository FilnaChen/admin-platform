import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './UserRole.less';

class UserRole extends Component {
  render() {
    return (
    <div>UserRole</div>
  );
  }
}

UserRole.propTypes = {
};

export default connect()(UserRole);
