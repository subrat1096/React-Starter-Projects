import { Component } from 'react';
import React = require('react');
import { MenuData } from './MenuData';
import './NavbarStyle.css';

export class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        {/* logo */}
        <h1 className="logo">
          DXweb <i className="fa-solid fa-circle-nodes"></i>
        </h1>
        {/* menubar icon */}
        <div className="menuIcon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked
                ? 'fa-sharp fa-solid fa-circle-xmark'
                : 'fa-solid fa-ellipsis-vertical'
            }
          ></i>
        </div>

        {/* nav-menu */}
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
