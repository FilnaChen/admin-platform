import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import PlatNav from '../../../components/PlatNav/platNav.js';
import ContentHeader from '../../../components/ContentHeader/contentHeader.js';
import UploadItem from '../../../components/UI/Upload/UploadItem.js';
import styles from './Upload.less';

class Upload extends Component {
  render() {
  	const { content } = this.props;
    return (
    <Row className={ styles.userAdmin }>
    	<Col className={ styles.indexNav }>
    		<PlatNav />
    	</Col>
    	<Col className={ styles.platContent } style={{ width: content.foldStatus?'calc(100% - 60px)':'calc(100% - 255px)', backgroundColor: '#f7f7f7'}}>
    		<ContentHeader />
    		<UploadItem />
    	</Col>
    </Row>
  );
  }
}

Upload.propTypes = {
};

export default connect(({content}) => ({content}))(Upload);
