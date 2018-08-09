import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Audio.less';

class Audio extends Component {
  render() {
    return (
    <div>Audio</div>
  );
  }
}

Audio.propTypes = {
};

export default connect()(Audio);
