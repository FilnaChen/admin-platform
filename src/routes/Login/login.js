import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Input, Button } from 'antd';
import styles from './login.less';

class LoginPage extends Component {
	loginSubmit = () => {
		const { dispatch, login } = this.props;
		this.props.form.validateFields((err, values) => {
      		if (!err) {
        		let username = this.props.form.getFieldValue("username");
        		let password = this.props.form.getFieldValue("password");
            dispatch({
              type: 'login/setLoadingStatus',
              loginStatus: true
            })
        		dispatch({
        			type: 'login/fetchCheckData',
        			payload: { username, password}
        		})
      		}
    	});
	}
  inputPwd = (event) => {
    if(event.keyCode==13){
      this.loginSubmit();
    }
  }
  render() {
  	const { getFieldDecorator } = this.props.form;
    const { login } = this.props;
    return (
    <Row className={ styles.login }>
    	<Col className={ styles.loginForm }>
    		<p>DVA ADMIN</p>
    		<Form>
    			<Form.Item>
    				{getFieldDecorator('username', {
            		rules: [{ required: true, message: '请输入用户名' }],
          			})(
            		<Input placeholder="用户名" className={ styles.inputStyle }/>
          			)}
    			</Form.Item>
    			<Form.Item>
    				{getFieldDecorator('password', {
            		rules: [{ required: true, message: '请输入密码' }],
          			})(
            		<Input placeholder="密码" type="password" className={ styles.inputStyle } onKeyDown={ this.inputPwd }/>
          			)}
    			</Form.Item>
    			<Form.Item>
    				<Button type="primary" className={ styles.buttonStyle } onClick={ this.loginSubmit } loading={ login.loginStatus }>登录</Button>
    			</Form.Item>
    		</Form>
    	</Col>
    </Row>
  );
  }
}

LoginPage.propTypes = {
};

export default connect(({ login }) => ({ login }))(Form.create()(LoginPage));
