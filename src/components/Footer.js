import React from 'react';
import '../assets/css/footer.css'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faPhoenixFramework} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
        
    <div class="foot-container">
        <div class="footer-col">
            <div className="footer-content">
                <h2>GET IN TOUCH</h2>
                <p>
                    <Link href="mailto:k12@domain.com">
                        <FontAwesomeIcon icon={faEnvelope} className='footer-icon' />k12@domain.com
                    </Link>
                </p>
                <p>
                    <Link href="tel:+95123456789">
                        <FontAwesomeIcon icon={faPhone} className='footer-icon' />+95123456789
                    </Link>
                </p>
            </div>
        </div>
        <div class="footer-col">
            <button className="contact-button">CONTACT ME</button>
        </div>
        <div class="footer-col">
            <div className='social-link'>
                <Link to="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} className='footer-icon' />
                </Link>
                <Link to="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} className='footer-icon' />
                </Link>
                <Link to="https://www.facebook.com">
                    <FontAwesomeIcon icon={faLinkedin} className='footer-icon' />
                </Link>
            </div>
            <p className="copyright">Copyright © 2019 MR</p>
        </div>
    </div>


    //   {/* <div className="footer-content">
    //     <h2>GET IN TOUCH</h2>
    //     <p><a href="mailto:k12@domain.com">k12@domain.com</a></p>
    //     <p><a href="tel:+77746551234">77 4565 1234</a></p>
    //     <button className="contact-button">CONTACT ME</button>
    //     <div className="social-icons">
    //       <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
    //       <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
    //       <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
    //     </div>
    //     <p className="copyright">Copyright © 2019 MR</p>
    //   </div> */}

  );
}

export default Footer;
