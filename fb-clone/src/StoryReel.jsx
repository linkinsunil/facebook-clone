import React from 'react';
import Story from './Story';
import './StoryReel.css';
import { users } from './data';

function StoryReel() {
  return (
    <div className='storyReel'>
      {console.log(users)}
      {users
        .filter((item, idx) => idx < 5)
        .map((user, idx) => {
          return (
            <Story
              key={idx}
              bgImage={user.bgImage}
              profilePic={user.profilePic}
              name={user.name}
            />
          );
        })}
    </div>
  );
}

export default StoryReel;
