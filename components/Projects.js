/* eslint-disable one-var */
import React from 'react';
import PropTypes from 'prop-types';
import PROJECTS from '../data/projects';

const Project = props => {
  const {title, image, description, link} = props.project;
 
  return (
      <div>
        <div style={{
          maxWidth: 350
        }}>
          <h3>{title}</h3>
          <div style={{
            margin: '20px 0px 10px 0px'
          }}>
            <img src={image} 
                alt="profile" 
                style={{width: 300, 
                height: 250}}/>
          </div>
          <p>{description}</p>
          <a href={link}>{link}</a>
        </div>
      </div>
    );
};

const Projects = () => {
    return (
      <div>
        <h2>Highlighted Projects</h2>
          <div>
            <div style={{
              display: 'flex',
              'flexWrap': 'wrap',
              'justifyContent': 'space-around'
              }}>
              {
                PROJECTS.map(ele => {
                  return (
                    <Project key={ele.id} project={ele}/>
                  );
                })
              }
            </div>
          </div>
      </div>
    );  
};

Project.propTypes = {
  project: PropTypes.any.isRequired
};

export default Projects;