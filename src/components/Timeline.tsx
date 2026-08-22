import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2026 - August 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Develop for Good</h3>
            <h4 className="vertical-timeline-element-subtitle">UX/UI Designer</h4>
            <p>
              <ul>
                <li>Redesigned a full-stack website for a non-profit organization from scratch using Figma.</li>
                <li>Performed user research, created wireframes, and translated client requirements into user-centered interface solutions.</li>
                <li>Conducted usability testing to ensure a seamless user experience.</li>
                <li>Collaborated with a team of developers to implement the design and improve the overall functionality of the website.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2025 - June 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Wordplay.dev</h3>
            <h4 className="vertical-timeline-element-subtitle">Contributor</h4>
            <p>
              <ul>
                <li>Collaborated with localization and engineering teams to update key componenets of the platform for Spanish language support.</li>
                <li>Performed iterative testing and WA on internationalized components, validating JSON-based text and configuration data to ensure consistency across UI/UX and backend text-processing piplines</li>
                <li>Designed a modular content-moderation system using rule-based filters and text processing utilities to enforce publication policies across multiple languages.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;