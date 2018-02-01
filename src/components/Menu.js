import React from 'react';
import { Link } from 'react-router-dom';
import ArticlesPage from './ArticlesPage';
import ReactDOM from 'react-dom';


class Menu extends React.Component {
    constructor() {
      super();
  
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        popupVisible: false
      };
    }

    handleClick() {
      if (!this.state.popupVisible) {
          document.addEventListener('click', this.handleOutsideClick, false);
      } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
      }
      this.setState(prevState => ({
         popupVisible: !prevState.popupVisible,
      }));
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
          return;
        }
        this.handleClick();
    }
  
    render() {
      return (
        <div
            className="noneYet"
            ref={node => { this.node = node }}
        >
          <div
            onClick={this.handleClick}
            className="header__menu"
          >
            <img src="/images/menubars.png" width='22px' height='22px' style={{}} />
            <div><span>Menu</span></div>
          </div>
          {this.state.popupVisible && (
            <div className="popover">
              <Link to="/" onClick={this.handleClick}>Home</Link>
              <Link to="/articles" onClick={this.handleClick}>Articles</Link>
              <Link to="/quotesPage" onClick={this.handleClick}>Inspiring Quotes</Link>
              <Link to="/construction" onClick={this.handleClick}>Best Pics</Link>
              <Link to="/aboutMePage" onClick={this.handleClick}>About Me</Link>
              <a className="last" href="https://www.youtube.com/watch?v=y7Snin6z9qM&t=1s" onClick={this.handleClick}>Euro Video</a>
            </div>
           )}
        </div>
      );
    }
}

/* <a onClick={() => this.props.history.push('/articles')}>Link</a> */

export default Menu;