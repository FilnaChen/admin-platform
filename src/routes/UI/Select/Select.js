import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Select.less';

class Select extends Component {
  render() {
    return (
    <div>Select</div>
  );
  }
}

Select.propTypes = {
};

export default connect()(Select);
