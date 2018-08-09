import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Second1.less';

class Second1 extends Component {
  render() {
    return (
    <div>Second1</div>
  );
  }
}

Second1.propTypes = {
};

export default connect()(Second1);
