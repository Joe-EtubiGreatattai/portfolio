import React from 'react';
import './Stack.css'; // Import CSS for styling

const technologies = [
  { image: require('./../../assets/react.png'), name: 'React', proficiency: 80 },
  { image: require('./../../assets/node.png'), name: 'Node.js', proficiency: 75 },
  { image: require('./../../assets/javascript.png'), name: 'JavaScript', proficiency: 90 },
  { image: require('./../../assets/python.png'), name: 'Python', proficiency: 70 },
  { image: require('./../../assets/vue.png'), name: 'Vue.js', proficiency: 65 },
  { image: require('./../../assets/github.jpeg'), name: 'GitHub', proficiency: 85 },
  { image: require('./../../assets/angular.png'), name: 'Angular', proficiency: 30 },
  { image: require('./../../assets/FastAPI.jpeg'), name: 'FastAPI', proficiency: 55 },
  { image: require('./../../assets/MongoDB.jpeg'), name: 'MongoDB', proficiency: 70 },
  { image: require('./../../assets/MySQL.png'), name: 'MySQL', proficiency: 75 },
  { image: require('./../../assets/TailwindCSS.jpeg'), name: 'TailwindCSS', proficiency: 80 },
  { image: require('./../../assets/Next.png'), name: 'Next.js', proficiency: 65 },
  { image: require('./../../assets/Reactnative.png'), name: 'React Native', proficiency: 70 },
  { image: require('./../../assets/RestAPI.jpeg'), name: 'REST API', proficiency: 80 },
  { image: require('./../../assets/jquery.png'), name: 'jQuery', proficiency: 60 },
  { image: require('./../../assets/html.webp'), name: 'HTML', proficiency: 100 },
  { image: require('./../../assets/CSS.png'), name: 'CSS', proficiency: 100 },
  { image: require('./../../assets/php.png'), name: 'PHP', proficiency: 60 },
  { image: require('./../../assets/sass.jpeg'), name: 'SASS', proficiency: 70 },
  { image: require('./../../assets/flask.png'), name: 'Flask', proficiency: 40 },
  { image: require('./../../assets/tensoflow.png'), name: 'Tensor Flow', proficiency: 40 },
  { image: require('./../../assets/scit.jpeg'), name: 'Scikit-learn', proficiency: 40 },
  { image: require('./../../assets/vscode.png'), name: 'VScode', proficiency: 80 },
  { image: require('./../../assets/cha.jpeg'), name: 'CharkaUI', proficiency: 90 },
  { image: require('./../../assets/fire.jpeg'), name: 'Fie base', proficiency: 90 },
  { image: require('./../../assets/postman.jpeg'), name: 'Postman', proficiency: 90 },
  { image: require('./../../assets/openai.jpeg'), name: 'Openai', proficiency: 95 },
  { image: require('./../../assets/pycharm.png'), name: 'Pycharm', proficiency: 80 },
  { image: require('./../../assets/wordpress.png'), name: 'Wordpress', proficiency: 80 },
  { image: require('./../../assets/figma.jpeg'), name: 'Figma', proficiency: 76 },
  { image: require('./../../assets/expo.jpeg'), name: 'Expo', proficiency: 96 },
  // Add more technology objects here as needed
];

const Stack = () => {
  return (
    <div className="stack-container">
      {technologies.map((tech, index) => (
        <div key={index} className="card">
          <img src={tech.image} alt={tech.name} className="tech-image" />
          <h3 className="tech-name">{tech.name}</h3>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${tech.proficiency}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stack;
