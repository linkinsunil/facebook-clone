import React, { useEffect, useState } from 'react';
import { users } from './data';
import './Feed.css';
import db from './firebase';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          timestamp={post.data.timestamp}
          username={post.data.username}
          message={post.data.message}
        />
      ))}
    </div>
  );
}

export default Feed;
