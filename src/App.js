import Buttons from "./Buttons";
import Display from "./Display";
import React from "react";
import "./styles.css";
import ZingTouch from "zingtouch";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: {
        mainMenu: true,
        coverFlow: false,
        music: false,
        games: false,
        settings: false,
      },
    };
  }

  handleButtonClick = (e) => {
    //This function handles the direct click on menu items in display
    let menuList = document.querySelectorAll(".menu-item");
    menuList.forEach((element) => {
      if (element !== e.target) {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    });
  };

  navigate = () => {
    // this function handles the navigation to a specific window
    if (this.state.menuItems.mainMenu) {
      let { menuItems } = this.state;
      let nav = document.querySelector(".active").dataset.navigate;
      for (let item in menuItems) {
        if (nav === item) menuItems[item] = true;
        else menuItems[item] = false;
      }
      this.setState({
        menuItems,
      });
    }
  };

  goBack = () => {
    // This function takes you back to the main menu on clicking the menu button
    this.setState({
      menuItems: {
        mainMenu: true,
        coverFlow: false,
        music: false,
        games: false,
        settings: false,
      },
    });
  };

  componentDidMount = () => {
    var myRegion = new ZingTouch.Region(
      document.querySelector(".iPod-container")
    );
    var myElement = document.getElementById("wheel");

    myRegion.bind(myElement, "rotate", function (e) {
      // console.log(e.detail.distanceFromLast);
      if (e.detail.distanceFromLast > 1.2) {
        let menuList = document.querySelectorAll(".menu-item");
        for (let i = 0; i < menuList.length - 1; i++) {
          if (menuList[i].classList.contains("active")) {
            menuList[i].classList.remove("active");
            menuList[i + 1].classList.add("active");
            return;
          }
        }
      }
      if (e.detail.distanceFromLast < -2) {
        let menuList = document.querySelectorAll(".menu-item");
        for (let i = menuList.length - 1; i > 0; i--) {
          let isActive = menuList[i].classList.contains("active");
          if (isActive) {
            menuList[i].classList.remove("active");
            menuList[i - 1].classList.add("active");
            return;
          }
        }
      }
    });

    let selectButton = document.querySelector(".select-button");
    selectButton.addEventListener("click", this.navigate);

    let menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", this.goBack);
  };

  render() {
    return (
      <div className="iPod-container" draggable="false">
        <Display
          menuItems={this.state.menuItems}
          handleButtonClick={this.handleButtonClick}
          navigate={this.navigate}
        />
        <Buttons />
      </div>
    );
  }
}

export default App;
