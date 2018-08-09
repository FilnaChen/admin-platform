import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Form, Input, Select, Button, Table, Icon } from 'antd';
import styles from './RoleTable.less';

class RoleTable extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const columns = [{
      title: '角色编号',
      dataIndex: 'rank',
      key: 'rank',
    }, {
      title: '角色名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: () => <Icon type="delete"/>
    },
    ];

    const data = [
      {
        key: 1,
        rank: 1,
        name: '管理员'
      },
      {
        key: 2,
        rank: 2,
        name: '学生'
      },
      {
        key: 3,
        rank: 3,
        name: '教师'
      }
    ]
    return (
    <Row className={ styles.adminTable }>
        <Table columns={columns} dataSource={data} className={ styles.userForm }/>
    </Row>
  );
  }
}

RoleTable.propTypes = {
};

export default connect()(Form.create()(RoleTable));
