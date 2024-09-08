import React from 'react';

const LandingSection = () => {
  return (
    <section id="landing">
       <div class="portfolio-header">
          <h1>Welcome to <br></br> My Design <br></br> Portfolio</h1>
          <div class="designer-btn">
            <button className='landing-btn'>Yamin Aye/Web Developer</button>
          </div>
        </div>
        <div class="oval-shape">
          <img src={`${process.env.PUBLIC_URL}/images/designer-image.jpg`}  alt="" />
        </div>
    </section>
  );
};

export default LandingSection;
