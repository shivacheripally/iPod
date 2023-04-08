import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      // Container for buttons and wheel, with a unique ID and draggable property
      <div className="buttons-container" id="wheel" draggable="false">
        
        {/* Menu button */}
        <button className="menu-button button">Menu</button>

        {/* Centered buttons */}
        <div className="centre-buttons">
          
          {/* Previous button */}
          <button className="prev-button button">
            {/* Icon for fast backward */}
            <i class="fa-solid fa-backward-fast"></i>
          </button>

          {/* Select button */}
          <button className="select-button button"></button>

          {/* Next button */}
          <button className="next-button button">
            {/* Icon for fast forward */}
            <i class="fa-solid fa-forward-fast"></i>
          </button>
        
        </div>

        {/* Play button */}
        <button className="play-button button">
          {/* Icon for play */}
          <i class="fa-solid fa-play"></i>
          {/* Icon for pause */}
          <i class="fa-solid fa-pause"></i>
        </button>
      
      </div>
    );
  }
}

// Export the Buttons component as the default export of this module
export default Buttons;
