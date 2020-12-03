import imageSrc from './imageInSrc.jpg';
import React from 'react';
import './style.css';


function App() {
  return (
    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">JSX Checkpoint</h1>
        <br />
        <img src={imageSrc} alt={'image from src'} className="imgSrc" />
        <br />
        <img src="/imageInPublic.jpg" alt={'image in public'} />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
