import React from 'react';

const youtubeItem = (props) => {
    return (
        <div className="youtube-item">
            <div className="youtube-image">
                <img src={props.img} alt="" className="avt" />
            </div>
            <div className="youtube-footer">
                <img src={props.imgfooter} alt="" className="avt-footer" />
                <div className="info">
                <h3>{props.info}</h3>
                <h4>{props.author}</h4>
                </div>
            </div>
        </div>
    );
};

export default youtubeItem;