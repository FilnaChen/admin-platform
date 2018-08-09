import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Form, Input, Select, Button, Table } from 'antd';
import styles from './AdminTable.less';

@connect(({user}) => ({user}))
class AdminTable extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchAdminData'
    })
  }
  searchEvent = () => {
    const { dispatch } = this.props;
    let searchType = this.props.form.getFieldValue("searchType");
    let searchValue = this.props.form.getFieldValue("searchValue");
    dispatch({
      type: 'user/fetchSearch',
      payload: { searchType, searchValue }
    })
  }
  render() {
    const { user } = this.props;
    const { getFieldDecorator } = this.props.form;
    const columns = [{
      title: '用户',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
    }, {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },{
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    }];

    const data = user.adminData
    return (
    <Row className={ styles.adminTable }>
    	<Form layout="inline" onSubmit={this.handleSubmit} className={ styles.searchForm }>
        <Form.Item>
          {getFieldDecorator('searchType', {
            initialValue: "用户名",
            rules: [],
          })(
            <Select>
              <Select.Option value="用户名">用户名</Select.Option>
              <Select.Option value="手机号">手机号</Select.Option>
              <Select.Option value="邮箱">邮箱</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('searchValue', {
            rules: [],
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon="search" onClick={ this.searchEvent }>搜索</Button>
        </Form.Item>
      </Form>
      <Row>
        <Table columns={columns} dataSource={data} className={ styles.userForm }/>
      </Row>
    </Row>
  );
  }
}

AdminTable.propTypes = {
};

export default connect()(Form.create()(AdminTable));
