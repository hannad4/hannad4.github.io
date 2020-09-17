import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(); 
    this.state = {
      title: "Danny's Website", 
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Projects', path: '/projects'},
        {title: 'Documents', path: '/documents'},
        {title: 'Contact Me', path: '/contact'}
      ], 
      home: {
        title: 'Hey there!', 
        subtitle: 'Welcome to my personal website.',
        text: 'Placeholder text for now',
      }, 
      projects: {
        title: 'My Projects', 
        subtitle: "From app development to tinkering with robots, I've tried it all", 
      }, 
      documents: {
        title: 'So you wanna see my deets, huh?', 
      }, 
      contact: {
        title: "Let's get in touch",
      }

    }
  }

  render() {
    return (
      <div>Hello testing</div>
    );
  }
  
}

export default App;
