import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Classify.less';

class Classify extends Component {
  render() {
    return (
    <div>Classify</div>
  );
  }
}

Classify.propTypes = {
};

export default connect()(Classify);
