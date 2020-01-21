import React, { Component } from 'react';
import { HashRouter, Router, Link, Route } from 'react-router-dom'
import AppStyle from './css/App.module.scss'

//导入路由组件
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Movie from './components/Movie/Movie.jsx'

//导入ant design
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';//引入全部的css
const { Header, Content, Footer } = Layout;






class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    
    return <HashRouter>
      <Layout className="layout" style={{ height: "100%" }}>
        <Header>
          <div className={AppStyle.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[window.location.hash.split('/')[1]||'home']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
            <Menu.Item key="movie"><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{flexGrow:1}}>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/movie" component={Movie}></Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>React-Movie ©2020 Created by Zhang Ce</Footer>
      </Layout>,
    </HashRouter>
  }
  componentDidMount() {

  }
}

export default APP;