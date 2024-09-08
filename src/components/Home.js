import React from "react";
import Header from "./Header";
import LandingSection from './LandingSection';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectSection';
import ContactMeSection from './ContactMeSection';
import Footer from './Footer';

const Home = () => {
    return (
          <div>
            <Header />
            <LandingSection />
            <AboutMeSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
      </div>
    )
}

export default Home;