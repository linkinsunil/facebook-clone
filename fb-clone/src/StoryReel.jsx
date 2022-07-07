import React from 'react';
import Story from './Story';
import './StoryReel.css';
import { users } from './data';

function StoryReel() {
  return (
    <div className='storyReel'>
      {users.map((user, idx) => {
        return (
          <Story
            key={idx}
            bgImage={user.bgImage}
            src={user.profilePic}
            title={user.name}
          />
        );
      })}
    </div>
  );
}

export default StoryReel;
