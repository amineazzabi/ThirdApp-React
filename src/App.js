
import './App.css';
import imageInSource from './imageInSource.jpg';
import './style.css';

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Your name here</h1>
      <br />
      <img src={imageInSource} alt='imgInSource'/>
      <br />
      <img src="./imageInPublic.jpeg" alt='imgInPublic'/>
    </div>
    <video width={320} height={240} controls>
      <source src="" type="video/mp4" />
    </video>
  </div>
);
}

export default App;
