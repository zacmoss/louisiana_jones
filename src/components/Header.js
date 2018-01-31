import React from 'react';
import Menu from './Menu';

const Header = () => (

    <div className="header__background">
        <div className="header__container">
            <div className="header__menuContainer">
                <Menu />
                {/*<h3>Menu</h3>*/}
            </div>
            <div className="header__logo">
                <span>Louisiana Jones</span>
            </div>
            <div className="header__socialWidgets">
                <span className="socialWidget facebook"><a href="url"><img src="/images/facebook.png" height="20px" width="20px"/></a></span>
                <span className="socialWidget"><a href="https://twitter.com/louisianajones_"><img src="/images/twitter.png" height="20px" width="20px"/></a></span>
                <span className="socialWidget"><a href="https://www.instagram.com/_louisianajones_/"><img src="/images/instagram.png" height="20px" width="20px"/></a></span>
                {/*<span className="socialWidget"><a href="url"><img src="/images/pinterest.png" height="20px" width="20px"/></a></span>*/}
            </div>
        </div>
    </div>
    
);

//<Menu history={props.history}/>

export default Header;