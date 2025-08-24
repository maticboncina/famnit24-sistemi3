import React, { Component } from 'react';
import './App.css';
import LessonsCard from './components/LessonsCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  onClick = () => {
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo
    }));
  };

  render() {
    const lessons = this.getLessons();
    return (
      <div className="content-container">
        <div className="main-content">
          <h1 className="header-text">Welcome back to {'<HTML/>'}</h1>
          <div className="sub-heading-container">
            <p>
              <span className="sub-heading">
                Let's brush up our HTML, JS, and CSS knowledge
              </span>
            </p>
          </div>

          <div style={{ display: 'flex' }}>
            {lessons.map((lesson) => (
              <LessonsCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  getLessons() {
    return [
      { id: 1, name: 'Lesson 1', description: 'Fundamentals of React' },
      { id: 2, name: 'Lesson 2', description: 'Understanding Components' },
      { id: 3, name: 'Lesson 3', description: 'State and Props' },
      { id: 4, name: 'Lesson 4', description: 'Lifecycle Methods' },
      { id: 5, name: 'Lesson 5', description: 'React Hooks' }
    ];
  }
}

export default App;