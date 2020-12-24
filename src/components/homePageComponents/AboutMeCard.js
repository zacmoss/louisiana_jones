import React from 'react';

const AboutMeCard = () => (
    <div className="content__container">
        <div className="aboutMeCard__row">
            <div className="aboutMeCard__text">
                <hr className="top"/>
                <h2>Hey, I'm Zac.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat venenatis diam a imperdiet. Pellentesque tristique nisi id nibh vestibulum, ac mattis nisl laoreet. Proin et eros gravida, vulputate purus sed, tempus nulla. Suspendisse potenti. Quisque ultrices sem id suscipit iaculis. Aenean orci orci, pellentesque et metus rutrum, accumsan aliquet augue. In vel nulla et augue venenatis congue. Vivamus bibendum imperdiet magna et bibendum. Donec mauris sapien, pretium ut porttitor vitae, vestibulum eu risus. Aliquam eleifend ac purus sit amet mollis. Curabitur euismod dapibus justo, et varius tortor lacinia a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Aliquam congue sagittis fermentum. Mauris viverra sagittis velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <hr className="bottom"/>
            </div>
            <img className="aboutMeCard__img" src="/images/me.jpg" />
        </div>
    </div>
);

export default AboutMeCard;