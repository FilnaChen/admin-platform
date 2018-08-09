import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Menu, Icon, Col } from 'antd';
import styles from './platNav.less';

class PlatNav extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'login/fetchGetMenu'
    })
  }
  render() {
  	const SubMenu = Menu.SubMenu;
	const MenuItemGroup = Menu.ItemGroup;
	const { content,login } = this.props;
    return (
    	<div className={ styles.navMenu } style={{ width: content.foldStatus?60:255 }}>
    	<p className={ styles.navTitle } style={{ display: content.foldStatus?'none':'block'}}>DVA ADMIN</p>
        <Menu
        style={{ width: content.foldStatus?60:256 , backgroundColor: '#3e3e3e'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={ content.foldStatus }
      >
        {
          login.menus.data?login.menus.data.map((item,index) => {
            return (
              <SubMenu style={{ color: '#999'}} key={`sub${index+1}`} title={<Link to={item.path} key={index} replace><span><Icon type={item.icon} /><span style={{ fontSize: '12px' }}>{item.name}</span></span></Link>}>
                {
                  item.children?item.children.map((item1,index1) => {
                    return (
                        <Menu.Item key={`${index1+1}`} style={{ fontSize: '12px', backgroundColor: '#3e3e3e', margin: '0', color: '#999' }}><Link to={item1.path} key={index1} replace>{item1.name}</Link></Menu.Item>
                    )
                  }):''
                }
              </SubMenu>          
            )
          }):''
        }
      </Menu>
      </div>
  );
  }
}

PlatNav.propTypes = {
};

export default connect(({content,login}) => ({content,login}))(PlatNav);
