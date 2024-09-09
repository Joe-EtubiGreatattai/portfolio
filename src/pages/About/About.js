import React from "react";
import "./About.css"; // Import the CSS for styling
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"; // Social icons

const About = () => {
  return (
    <div className="about-container">
      {/* Left Section: Photo and Contact Information */}
      <div className="left-section">
        <img
          src={require("./../../assets/me.png")} // Replace with your photo
          alt="Joe-Etubi Great Attai"
          className="profile-photo"
        />
        <div className="contact-info">
          <p>
            {" "}
            <b>Email</b>:{" "}
            <a href="mailto:greatattai442442@gmail.com">
              greatattai442442@gmail.com
            </a>
          </p>
          <p>
            <b>Phone</b>: <a href="tel:+123456789">+234-8146139334</a>
          </p>
          <p>
            <b>Nationality</b>: Nigerian
          </p>
          <div className="social-links">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Name, About Me, Statistics, Testimonials */}
      <div className="right-section">
        <h1 className="name">Joe-Etubi Great Attai</h1>
        <p className="about-me">
          I am a passionate software developer with over five years of
          experience in creating innovative solutions across various domains. My
          journey has taken me through a diverse range of projects, including
          web applications, mobile applications, and machine learning
          initiatives. Throughout my career, I have honed my skills in multiple
          technologies, enabling me to adapt quickly to new challenges and
          environments. My strongest asset is my ability to rapidly learn and
          implement new technologies, which allows me to deliver high-quality
          projects at a fast pace. I thrive in dynamic settings where I can
          leverage my problem-solving skills and creativity to bring ideas to
          life. I am always eager to collaborate with others and contribute to
          projects that make a difference. Thank you for visiting my portfolio,
          and I look forward to connecting with you.
        </p>

        <div className="statistics">
          <div className="card">
            <p>
              <b>5 +</b>
            </p>
            <h2>Years of Experience</h2>
          </div>
          <div className="card">
            <p>
              <b>50 +</b>
            </p>
            <h2>Projects</h2>
          </div>
          <div className="card">
            <p>
              <b>30 +</b>
            </p>
            <h2>Happy Clients</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
