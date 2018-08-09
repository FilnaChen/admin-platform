import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Progress } from 'antd';
import styles from './progress.less';

class ProgressItem extends Component {
  render() {
    const number=Number(this.props.number);
    return (
    	<Row className={ styles.progressItem }>
        <Col className={ styles.progressIcon } style={{ backgroundColor: this.props.bgColor }}>
          <Icon type={ this.props.icon } />
        </Col>
        <Col className={ styles.progressData }>
         <span className={ styles.progressTitle }>{this.props.title}</span>
          <Progress percent={number} />
          <span className={ styles.progressNumber }>{this.props.data}</span>
        </Col>
      </Row>
  );
  }
}

ProgressItem.propTypes = {
};

export default connect()(ProgressItem);
