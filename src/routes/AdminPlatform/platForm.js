import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import PlatNav from '../../components/PlatNav/platNav.js';
import ContentHeader from '../../components/ContentHeader/contentHeader.js';
import ProgressItem from '../../components/platForm/progress.js';
import Zhexiantu from '../../components/platForm/Zhexiantu.js';
import PlatTable from '../../components/platForm/PlatTable.js';
import Mianjitu from '../../components/platForm/Mianjitu.js';
import { host } from '../../common/config.js';
import styles from './platForm.less';

class PlatForm extends Component {
  render() {
    const { content } = this.props;
    return (
    <Row className={ styles.platIndex }>
    	<Col className={ styles.indexNav }>
    		<PlatNav />
    	</Col>
    	<Col className={ styles.platContent } style={{ width: content.foldStatus?'calc(100% - 60px)':'calc(100% - 255px)', backgroundColor: '#f7f7f7'}}>
    		<ContentHeader />
    		<Row>
    			<Col>
    				<ProgressItem title="Online Review" number="25" data="2500" bgColor="rgb(100, 234, 145)" icon="pay-circle-o"/>
    			   <ProgressItem title="New Custormers" number="50" data="5000" bgColor="rgb(143, 201, 251)" icon="team"/>
             <ProgressItem title="Active Project" number="750" data="7500" bgColor="rgb(216, 151, 235)" icon="message"/>
             <ProgressItem title="Referrals" number="100" data="10000" bgColor="rgb(246, 152, 153)" icon="shopping-cart"/>
          </Col>
    		</Row>
        <Zhexiantu />
        <PlatTable />
        <Mianjitu />
    	</Col>
    </Row>
  );
  }
}

PlatForm.propTypes = {
};

export default connect(({ content,login }) => ({ content,login }))(PlatForm);
