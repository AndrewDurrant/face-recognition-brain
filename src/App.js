import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
// import FaceRecognition from './component/sFaceRecogniton/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';

const Clarifai = require('clarifai');
const app = new Clarifai.App({
  apiKey: 
});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    },
    number: {
      value: 222,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("7a6b074de2d1442d8ffb7e3fcfafff71", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
    
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} 
        />
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
