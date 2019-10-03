import React from 'react';
import './Home.css'
import myPic from '../../assets/my-pic.jpg';

const Home = () => {
    return (
        <section id="home">
            <h1>Suliman Alhabib</h1>
            <p>a full-stack web developer</p>
            <img src={myPic} alt="personal"/>
            <div className="intro-container">
            <p>
                Welcome to my portfolio<br/>
                I'm a web developer, my hands-on the latest technologies in web development Writing well designed, testable, efficient code by using best software development practices. With hands-on innovative, enthusiasm, commitment to development and staying-up-to-date with the latest in my field, I am seeking a role at a growing organization to boost its productivity & development with a team.
            </p>
            </div>
        </section>
    )
}

export default Home;
