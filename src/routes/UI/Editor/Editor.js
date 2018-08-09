import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Editor.less';

class Editor extends Component {
  render() {
    return (
    <div>Editor</div>
  );
  }
}

Editor.propTypes = {
};

export default connect()(Editor);
