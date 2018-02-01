import React from 'react';

const AboutMePage = () => (
    <div className="aboutMePage__container">
    
        <div className="aboutMePage__textContainer">
            <span style={{ fontSize: '200%' }}>About Me</span>

            <p>Hey there. My name's Zac. This is a website 
                built by me, about my random travels. I'm hoping 
                to encourage people to take a step outside their 
                door and see a different part of the world whitch 
                they may not have experienced yet.</p>

            <p>I’m really interested in the idea of “adventure.” 
                I think, to me, it’s one of the last bits of magic 
                in this modern world.</p>

            <p>I think it’s cool to share a little bit of light 
                when you can. One of my favorite things about 
                travel is getting to experience the kindness
                of strangers and the good side of humanity that's 
                out there. Cheers!</p>
        </div>

        <div className="aboutMePage__imgContainer">
            <img src="/images/amp-pic1.jpg" width="374" height="667" />
        </div>
    
    </div>
);

export default AboutMePage;