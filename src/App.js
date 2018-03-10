import React, {Component} from 'react';
import logo from './logo.svg';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="October 2017 - Mars 2018"
              iconStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff'
            }}
              icon={< WorkIcon />}>
              <h3 className="vertical-timeline-element-title">Javascript Developper</h3>
              <h4 className="vertical-timeline-element-subtitle">Halo Labs</h4>
              <p>
                Javascript Development
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="October 2017 - Mars 2018"
              iconStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff'
            }}
              icon={< WorkIcon />}>
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff'
            }}
              icon={< WorkIcon />}>
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff'
            }}
              icon={< WorkIcon />}>
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{
              background: 'rgb(233, 30, 99)',
              color: '#fff'
            }}
              icon={< SchoolIcon />}>
              <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
              <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
              <p>
                Strategy, Social Media
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{
              background: 'rgb(233, 30, 99)',
              color: '#fff'
            }}
              icon={< SchoolIcon />}>
              <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
              <h4 className="vertical-timeline-element-subtitle">Certification</h4>
              <p>
                Creative Direction, User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{
              background: 'rgb(233, 30, 99)',
              color: '#fff'
            }}
              icon={< SchoolIcon />}>
              <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
              <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
              <p>
                Creative Direction, Visual Design
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;