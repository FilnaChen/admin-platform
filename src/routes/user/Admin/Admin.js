import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import PlatNav from '../../../components/PlatNav/platNav.js';
import ContentHeader from '../../../components/ContentHeader/contentHeader.js';
import AdminTable from '../../../components/User/Admin/AdminTable.js';
import styles from './Admin.less';

class Admin extends Component {
  render() {
  	const { content } = this.props;
    return (
    <Row className={ styles.userAdmin }>
    	<Col className={ styles.indexNav }>
    		<PlatNav />
    	</Col>
    	<Col className={ styles.platContent } style={{ width: content.foldStatus?'calc(100% - 60px)':'calc(100% - 255px)', backgroundColor: '#f7f7f7'}}>
    		<ContentHeader />
    		<AdminTable />
    	</Col>
    </Row>
  );
  }
}

Admin.propTypes = {
};

export default connect(({content}) => ({content}))(Admin);
