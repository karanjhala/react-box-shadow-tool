// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [HorOffset,setHorOffset] = useState(10)
  const [VerOffset,setVerOffset] = useState(10)
  const [BlurOffset,setBlurOffset] = useState(10)
  const [ColorValue,setColorValue] = useState("#54565a")
  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200" value={HorOffset} onChange={(e) => setHorOffset(e.target.value)} />
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200" value={VerOffset} onChange={(e) => setVerOffset(e.target.value)} />
        <label>Blur</label>
        <input type="range" min="0" max="200" value={BlurOffset} onChange={(e) => setBlurOffset(e.target.value)} />
        <label>Color</label>
        <input type="color" value={ColorValue} onChange={(e) => setColorValue(e.target.value)} />
      </div>
      <div className="output">
        <div className="box" style={{boxShadow: `${HorOffset}px ${VerOffset}px ${BlurOffset}px ${ColorValue}`}}></div>
      </div>

    </div>
  );
}

export default App;
