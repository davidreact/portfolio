import React from 'react';
import {Link} from 'react-router-dom';
import SocialProfiles from './SocialProfiles';
import { Z_FIXED } from 'zlib';

const Header = props => {
  const style = {margin: 10};

  return (
    <div 
        style={{
          minHeight: '100%',
          position: 'relative'
        }}
      >
      <div style={{
        marginTop: -17,
        padding: '2%',
        marginBottom: 10,
        // background: 'grey',
        display: 'flex'
        }}>
       <Link style ={style} to='/'>Home</Link>
       <Link style ={style} to='/projects'>Projects</Link>
       <Link style ={style} to='/jokes'>Jokes</Link>
      </div>
      {props.children}
      <hr/>
      <SocialProfiles />
    </div>
  )
}

export default Header;