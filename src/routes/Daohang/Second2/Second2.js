import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Second2.less';

class Second2 extends Component {
  render() {
    return (
    <div>Second2</div>
  );
  }
}

Second2.propTypes = {
};

export default connect()(Second2);
