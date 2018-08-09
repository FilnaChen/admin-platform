import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Form, Input, Button } from 'antd';
import styles from './ChangePwd.less';

class ChangePwd extends Component {
  changePwd = () => {
    const { dispatch } = this.props;
    var newPwd = this.props.form.getFieldValue('newPwd');
    var oldPwd = this.props.form.getFieldValue('oldPwd');
    var newPwdAgain = this.props.form.getFieldValue('newPwdAgain');
    dispatch({
      type: 'system/fetchChangePwd',
      payload: { newPwd, oldPwd, newPwdAgain }
    })
  }
  render() {
    const { system } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
    <Row className={ styles.changePwd }>
        <Form className={ styles.pwdForm }>
          <Form.Item label='旧密码'>
            {getFieldDecorator('oldPwd', {
                rules: [{ required: true, message: '请输入旧密码', }],
              })(
                <Input placeholder="请输入旧密码"/>
            )}
          </Form.Item>
          <Form.Item label='新密码'>
            {getFieldDecorator('newPwd', {
                rules: [{ required: true, message: '请输入新密码' }],
              })(
                <Input placeholder="请输入新密码"/>
            )}
          </Form.Item>
          <Form.Item label='新密码确认'>
            {getFieldDecorator('newPwdAgain', {
                rules: [{ required: true, message: '请再次输入新密码' }],
              })(
                <Input placeholder="请再次输入新密码"/>
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" onClick={ this.changePwd }>确认修改</Button>
        </Form>
    </Row>
  );
  }
}

ChangePwd.propTypes = {
};

export default connect(({system}) => ({system}))(Form.create()(ChangePwd));
