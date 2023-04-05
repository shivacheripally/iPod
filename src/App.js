import React from 'react';
import './App.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className='music-genre'>
          <h2>iPod.js</h2>
          <div className='list'>
            <div className='coverflow'><span>Cover Flow</span></div>
            <div className='music'><span>Music</span></div>
            <div className='artists'><span>Artists</span></div>
            <div className='settings'><span>Settings</span></div>
          </div>
        </div>
        <img className='bg-img' src='https://tse4.mm.bing.net/th?id=OIP.YxgHegIgLzm-QZ8v2R5zgAHaJ4&pid=Api&P=0' alt='music-mood' />
      </>
    );
  }
}

class Settings extends React.Component {
  render() {
    return (
      <div className='settings-comp'>
        <h1>Settings</h1>
        <img src='https://t4.ftcdn.net/jpg/01/13/94/83/240_F_113948390_gRY4UwSTxm2bNX8jD2oIjpEuwJPELTTr.jpg' alt='settings' />
      </div>
    );
  }
}

// class  

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeFlag:true,
      coverflowFlag:false,
      musicFlag:false,
      artistsFlag: false,
      settingsFlag:false
    }

    this.settingsFunc = this.settingsFunc.bind(this);
  }
  settingsFunc() {
    this.setState({
      settingsFlag: !this.state.settingsFlag,
      homeFlag: !this.state.homeFlag
    });
  }
  

  render() {
    const {homeFlag,settingsFlag} = this.state;
    return (
      <div className="App">
        <div className="ipod">
          <div className='screen'>
            {settingsFlag && <Settings />}
            {homeFlag && <Home />}
          </div>
          <div className="wheel">
            <span>MENU</span>
            <div className='wheel-button-div'>
              <i className="fa-solid fa-backward-fast"></i>
              <div onClick={this.settingsFunc} className='wheel-button'></div>
              <i className="fa-solid fa-forward-fast"></i>
            </div>
            <div className='play-pause'>
              <i className="fa-solid fa-play"></i>
              <i className="fa-solid fa-pause"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
