import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ipod">
        <div className="screen">

        </div>
        <div className="wheel">
          <span>MENU</span>
          <div className='wheel-button-div'>
            <img src="https://cdn-icons-png.flaticon.com/512/4818/4818809.png" alt="backward"/>
            <div className='wheel-button'></div>
            <img src="https://cdn-icons-png.flaticon.com/512/4818/4818800.png" alt="forwrad"/>
          </div>
            <div className='play-pause'>
              <img src="https://cdn-icons-png.flaticon.com/512/5577/5577228.png" alt="play"/>
              <img src="https://cdn-icons-png.flaticon.com/512/151/151859.png" alt="pause"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
