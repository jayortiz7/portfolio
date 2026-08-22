import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C/C++",
    "C#",
    "Dart/Flutter",
    "Figma",
    "HTML/CSS",
    "Java",
    "JavaScript",
    "JSON",
    "Node.js",
    "Python",
    "React",
    "SQL",
];

const labelsSecond = [
    "Firebase",
    "Git",
    "GitHub Actions",
    "Azure",
    "Pandas",
    "NumPy",
    "Matplotlib",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have desiged and developed a variety of web and mobile applications using modern technologies such as React and Flutter. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have experience collecting, analyzing, and formatting data as well as deploying both web and mobile applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faEarthAmericas} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>With the rise of generative AI and large language models, I have been able to leverage these technologies while not ignoring the human aspect of software engineering.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;