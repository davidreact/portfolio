import React from 'react';
import SOCIAL_PROFILES from '../data/socialProjects';

const SocialProfiles = () => {
  return (
    <div style={{padding: 5}}>
    
      <h4>Connect with me!</h4>
      {
        SOCIAL_PROFILES.map(ele => {
          return (
            <div key={ele.id}
                  style={{
                    display: 'inline-block',
                    width: 50,
                    margin: '1%'
                  }}>
              <a href={ele.link} target="_blank" rel="noopener noreferrer">
                <img src={ele.image} 
                      alt="social-profile" 
                      style={{width: 25}} 
                      /></a>
            </div>
          );
        })
      }
    </div>
  );
};

export default SocialProfiles;