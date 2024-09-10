import React from 'react';
import { youtube } from '../../Data';
import YoutubeItem from './youtubeItem'; 

const YoutubeList = () => {
  return (
    <div className="youtube-list">
    
      {youtube.map((item, index) => (
        <YoutubeItem
          key={item.id}
          img={item.img || item.imgfooter}
          imgfooter={item.imgfooter}
          info={item.info}
          author={item.author}
        />
      ))}
    </div>
  );
};

export default YoutubeList;
