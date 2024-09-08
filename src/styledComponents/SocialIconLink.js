import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ImageLink = styled.div`
  flex: 1;
  display: flex;
  gap: 1em;
  justify-content: flex-end;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  height: 1.625em;
  color: #333;

  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIconLink = () => {
    return(
        <ImageLink>
        <Link to="https://www.facebook.com">
          <SocialIcon icon={faFacebookF} />
        </Link>
        <Link to="https://www.instagram.com">
          <SocialIcon icon={faInstagram} />
        </Link>
        <Link to="https://www.linkedin.com">
          <SocialIcon icon={faLinkedin} />
        </Link>
      </ImageLink>
    );
}

export default SocialIconLink;