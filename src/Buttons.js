import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons-container" id="wheel" draggable="false">
        <button className="menu-button button">Menu</button>

        <div className="centre-buttons">
          <button className="prev-button button">
            <i class="fa-solid fa-backward-fast"></i>
            
          </button>
          <button className="select-button button"></button>
          <button className="next-button button">
            <i class="fa-solid fa-forward-fast"></i>
          </button>
        </div>
        <button className="play-button button">
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-pause"></i>
        </button>
      </div>
    );
  }
}

export default Buttons;
