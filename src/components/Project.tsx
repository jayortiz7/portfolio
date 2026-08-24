import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://jayortiz7.github.io/WitchSimulator/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="500px" height="300px"/></a>
                <a href="https://jayortiz7.github.io/WitchSimulator/" target="_blank" rel="noreferrer"><h2>WitchSimulator</h2></a>
                <p>Developed a Unity WebGL game with Unity and C#. I worked on the cauldron and potion physics, graphics, and effects. 
                    <a href="https://github.com/jayortiz7/WitchSimulator/" target="_blank" rel="noreferrer" > View repo here.</a>
                </p>
            </div>
            <div className="project">
                <a href="https://jayortiz7.github.io/WeatherApp/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="500px" height="300px"/></a>
                <a href="https://jayortiz7.github.io/WeatherApp/" target="_blank" rel="noreferrer"><h2>WeatherApp</h2></a>
                <p>Developed a responsive weather application with Flutter and Dart. I implemented real-time weather data fetching and a simple design. 
                    <a href="https://github.com/jayortiz7/WeatherApp/" target="_blank" rel="noreferrer" > View repo here.</a>
                </p>
            </div>
            <div className="project">
                <a href="https://bmanske505.github.io/Escape-The-Forest/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="500px" height="300px"/></a>
                <a href="https://bmanske505.github.io/Escape-The-Forest/" target="_blank" rel="noreferrer"><h2>Escape The Forest</h2></a>
                <p>Developed a 3D horror game with Unity and C#. I worked on the maze design, enemy AI, and player analytics. 
                    <a href="https://github.com/bmanske505/Escape-The-Forest/" target="_blank" rel="noreferrer" > View repo here.</a>
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/jayortiz7/SEEattle" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="500px" height="300px"/></a>
                <a href="https://github.com/jayortiz7/SEEattle" target="_blank" rel="noreferrer"><h2>SEEattle</h2></a>
                <p>Developed a full-stack iOS application with Flutter and Dart. I created wireframes and implemented the client side database features using SQLite for storing user preferences and visited locations. I also implemented a local database using JSON for landmarks and locations.</p>
            </div>
            <div className="project">
                <a href="https://wordplay.dev/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="500px" height="300px"/></a>
                <a href="https://wordplay.dev/" target="_blank" rel="noreferrer"><h2>Wordplay.dev</h2></a>
                <p>Collaborated with localization and engineering teams to update key components of the platform for Spanish language support. 
                    <a href="https://github.com/wordplaydev/wordplay/issues/367" target="_blank" rel="noreferrer" > View issue here.</a>
                </p>
                <p>Designed a modular content-moderation system using rule-based filters, text processing utilities, and community involvement to enforce publication policies across multiple languages.
                    <a href="https://github.com/wordplaydev/wordplay/issues/193" target="_blank" rel="noreferrer" > View issue here.</a>
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;