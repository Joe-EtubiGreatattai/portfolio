import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS for styling
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Social icons

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // New state for fading effect

  const images = [
    require('./../../assets/me.png'),
    require('./../../assets/vue.png'),
    require('./../../assets/python.png'),
    require('./../../assets/github.jpeg'),
    require('./../../assets/angular.png'),
    require('./../../assets/FastAPI.jpeg'),
    require('./../../assets/javascript.png'),
    require('./../../assets/MongoDB.jpeg'),
    require('./../../assets/MySQL.png'),
    require('./../../assets/node.png'),
    require('./../../assets/TailwindCSS.jpeg'),
    require('./../../assets/Next.png'),
    require('./../../assets/react.png'),
    require('./../../assets/Reactnative.png'),
    require('./../../assets/RestAPI.jpeg'),
    require('./../../assets/jQuery.jpeg'),
    // Add more images here
  ];

  useEffect(() => {
    // Simulate a page load delay for the animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Fade-in delay

    // Image rotation logic with fade effect
    const imageChangeInterval = setInterval(() => {
      setIsFading(true); // Start fade-out

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false); // Start fade-in
      }, 500); // Set fade-out duration to match CSS

    }, 3500); // Change image every 3.5 seconds (including the 0.5s fade)

    // Clear the interval when the component is unmounted
    return () => clearInterval(imageChangeInterval);
  }, [images.length]);

  return (
    <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Portrait */}
      <div className="portrait-container">
        <img
          src={images[currentImageIndex]} // Dynamically change image
          alt="Joe-Etubi Great Attai"
          className={`portrait ${isFading ? 'fade-out' : 'fade-in'}`} // Apply fade class
        />
      </div>

      {/* Animated Text and Button */}
      <div className="content">
        <h1 className="animated-text">
          I am <span>Great Attai</span>.
        </h1>
        <p className="sub-text">Building dynamic and scalable web applications.</p>
        <a href="/path-to-cv.pdf" className="btn primary-btn" download>
          Download Resume
        </a>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
