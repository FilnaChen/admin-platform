import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon } from 'antd';
import styles from './contentHeader.less';

class ContentHeader extends Component {
  foldEvent=()=>{
    const { dispatch, content } = this.props;
    dispatch({
      type: 'content/foldMenu',
      foldStatus: !content.foldStatus
    })
  }
  render() {
    return (
    	<Row className={ styles.contentHeader }>
        <Col span="4" className={ styles.foldIcon }>
          <Icon type="menu-fold" onClick={ this.foldEvent }/>
        </Col>
        <Col span="20" className={ styles.notifyIcon }>
          <Icon type="message" className={ styles.iconItem }/>
          <sup className={ styles.notifyText1 }>5</sup>
          <Icon type="mail" className={ styles.iconItem }/>
          <sup className={ styles.notifyText2 }>10</sup>
          <Icon type="notification" className={ styles.iconItem }/>
          <sup className={ styles.notifyText3 }>99+</sup>
          <Icon type="user" style={{ marginLeft: '30px'}}/>
          <span>guest</span>
        </Col>
      </Row>
  );
  }
}

ContentHeader.propTypes = {
};

export default connect(({content}) => ({content}))(ContentHeader);
