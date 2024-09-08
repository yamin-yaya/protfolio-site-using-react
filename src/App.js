import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectSection';
import ContactMeSection from './components/ContactMeSection';



class App extends Component {
  render(){
    return (

      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={LandingSection} />
        <Route path='/projects' Component={ProjectsSection} />
        <Route path='/contact' Component={ContactMeSection} />
      </Routes>
    );
  }
};

export default App;


