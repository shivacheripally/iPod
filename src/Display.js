import React from "react";
// import MainMenu from "./MainMenu";

class Display extends React.Component {
  render() {
    // Destructure props into variables
    let { mainMenu, coverFlow, music, games, settings } = this.props.menuItems;
    let { handleButtonClick, navigate } = this.props;

    return (
      // Main display container
      <div className="display" draggable="false">
        {/* Render the main menu if mainMenu prop is true */}
        {mainMenu && (
          <ul
            className="main-menu"
            onMouseDown={handleButtonClick}
            onMouseUp={navigate}
          >
            {/* Main menu title */}
            <h2> iPod.js </h2>
            {/* Main menu items */}
            <li className="menu-item cover-flow active" data-navigate="coverFlow">
              Cover Flow
            </li>
            <li className="menu-item music" data-navigate="music">
              Music
            </li>
            <li className="menu-item games" data-navigate="games">
              Games
            </li>
            <li className="menu-item settings" data-navigate="settings">
              Settings
            </li>
          </ul>
        )}
        {/* Render coverFlow image if coverFlow prop is true */}
        {coverFlow && (
          <img
            className="menu-img"
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F11%2F02%2Fariana-grande-1-1.jpg&q=60"
            alt="menu"
          />
        )}
        {/* Render music image if music prop is true */}
        {music && (
          <img
            className="menu-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRMv4NbaLiPVN8fnHhfI0vCtdzlKaaUqCXvuap7QEcQ&usqp=CAU&ec=48665698"
            alt="music"
          />
        )}
        {/* Render games image if games prop is true */}
        {games && (
          <img
            className="menu-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXhSkVpIJU47tvJKMsuczAYKKOIqme2K6NjjbsrihQw&usqp=CAU&ec=48665698"
            alt="games"
          />
        )}
        {/* Render settings image if settings prop is true */}
        {settings && (
          <img
            className="menu-img"
            src="https://t3.ftcdn.net/jpg/03/00/71/16/240_F_300711632_r2Vh9WjuRdX5CnBFFyq7FUZS1F4EMCk4.jpg"
            alt="settings"
          />
        )}
      </div>
    );
  }
}

export default Display;
