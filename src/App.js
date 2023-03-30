import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ipod">
        <div className="screen">
          <div className='music-genre'>
            <h2>iPod.js</h2>
            <div className='list'>
              <div><span>Cover Flow</span></div>
              <div><span>Music</span></div>
              <div><span>Artists</span></div>
              <div><span>Settings</span></div>
            </div>
          </div>

          <img className='bg-img' src='https://tse4.mm.bing.net/th?id=OIP.YxgHegIgLzm-QZ8v2R5zgAHaJ4&pid=Api&P=0' alt='music-mood'/>
        </div>
        <div className="wheel">
          <span>MENU</span>
          <div className='wheel-button-div'>
            <i class="fa-solid fa-backward-fast"></i>
              <div className='wheel-button'></div>
            <i class="fa-solid fa-forward-fast"></i>
          </div>
            <div className='play-pause'>
              <i class="fa-solid fa-play"></i>
              <i class="fa-solid fa-pause"></i>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
