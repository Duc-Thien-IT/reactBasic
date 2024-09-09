import './App.css';

function App() {
  return (
    <YoutubeItem>
    </YoutubeItem>
  );
}

function YoutubeItem (props){
  return (
      <div class={props.ytb}>
            <div class="youtube-image">
                <img src={props.img} alt="" className="avt" />
            </div>
            <div class="youtube-footer">
                <img src={props.imgfooter} alt="" className="avt-footer"/>
            </div>
            <div class="info">
                <h3>{props.info}</h3>
            </div>
      </div>
  )
}

export default App;
