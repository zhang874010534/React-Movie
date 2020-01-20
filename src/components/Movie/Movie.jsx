import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'

//导入组件
import MovieList from './MovieList.jsx'

//antd
import { Layout, Menu, } from 'antd';

const {  Content, Sider } = Layout;


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <Layout style={{height:"100%"}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
              <Menu.Item key="1"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft:"1px" }}>
          <Content
            style={{
              background: '#fff',
              padding: 10,
              margin: 0,
              minHeight: 280,
            }}
          >
              <Route path="/movie/:type/:page" component={MovieList}></Route>
          </Content>
        </Layout>
      </Layout>
        
    }
}
 
export default Movie