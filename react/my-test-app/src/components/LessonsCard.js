import React from "react";

class LessonsCard extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      showInfo: false,
    };
  }

  // Define the onClick function
  toggleInfo = () => {
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo,
    }));
  };

  render() {

    return (
      <div className="lesson-card">
        <h2>{this.props.name}</h2>
        <div>
          <p>Check what we are going to learn under this lesson</p>
        </div>
        <button onClick={this.toggleInfo}>View Summary</button>
        {/* Conditionally render the info panel */}
        {this.state.showInfo && (
          <div className="more-info-panel">
            <p className="black-text">
              If you take the first lesson, you can do the second one.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default LessonsCard;
