import React from 'react';
import './Story.css';
import { Avatar } from '@mui/material';

function Story({ bgImage, profilePic, name }) {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='story'>
      <Avatar className='story__avatar' src={profilePic} />
      <h4>{name}</h4>
    </div>
  );
}

export default Story;
