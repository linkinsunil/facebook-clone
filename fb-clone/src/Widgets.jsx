import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className='widgets'>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMarvelIndia%2F&tabs=timeline&width=340&height=1500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId'
        title='widgets'
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden', borderRadius: '15px' }}
        scrolling='no'
        frameBorder='0'
        allowFullScreen={true}
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
}

export default Widgets;
