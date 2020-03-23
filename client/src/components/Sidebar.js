import { Menu, Switch } from 'antd';
import React,{Component} from 'react';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;

class Sidebar extends Component{
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className="containner fluid">
        <div className="row">
          <div className="col-md-4 text left mt-2">
          <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 300 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>ROOTS OF EQUATIONS</span>
              </span>
            }
          >
            <Menu.Item key="1">Bisection Method<Link to="/Bisection"/></Menu.Item>
            <Menu.Item key="2">False-Position Method<Link to="/Falseposition"/></Menu.Item>
            <Menu.Item key="3">One-Point Iteration Method</Menu.Item>
            <Menu.Item key="4">Newton-Raphson Method</Menu.Item>
            <Menu.Item key="5">Secant Method</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <span>SOLUTION OF LINEAR ALGEBRAIC</span>
              </span>
            }
          >
            
            <Menu.Item key="6">Cramer's Rule</Menu.Item>
            <Menu.Item key="7">Gauss Elimination</Menu.Item>
            <Menu.Item key="8">Gauss-Jordan</Menu.Item>
            <Menu.Item key="9">Matrix Inversion</Menu.Item>
            <Menu.Item key="10">LU Decomposition</Menu.Item>
            <Menu.Item key="11">Cholesky Decomposition</Menu.Item>
            <Menu.Item key="12">Jacobi Iteration</Menu.Item>
            <Menu.Item key="13">Gauss-Seidel</Menu.Item>
            <Menu.Item key="14">Conjugate Gradient</Menu.Item>
        
          </SubMenu>

          <SubMenu
            key="sub4"
            title={
              <span>
                <span>INTERPOLATION</span>
              </span>
            }
          >
            
            <Menu.Item key="15">Newton's Divided-Difference</Menu.Item>
            <Menu.Item key="15">Lagrang</Menu.Item>
            <Menu.Item key="15">Spline</Menu.Item>
          </SubMenu>
        </Menu>

          </div>

        </div>
      </div>
    );
  }
}
export default Sidebar;