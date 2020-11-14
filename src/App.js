// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [HorOffset,setHorOffset] = useState(10)
  const [VerOffset,setVerOffset] = useState(10)
  const [BlurOffset,setBlurOffset] = useState(10)
  const [ColorValue,setColorValue] = useState("#54565a")
  const [InsetToggle,setInsetToggle] = useState(false)
  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200" value={HorOffset} onChange={(e) => setHorOffset(e.target.value)} />
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200" value={VerOffset} onChange={(e) => setVerOffset(e.target.value)} />
        <label>Blur</label>
        <input type="range" min="0" max="200" value={BlurOffset} onChange={(e) => setBlurOffset(e.target.value)} />
        <label>Color </label>
        <input type="color" value={ColorValue} onChange={(e) => setColorValue(e.target.value)} />
        <div className="switch">
          <label>
            Outline
            <input type="checkbox" checked={InsetToggle} onChange={() => setInsetToggle(!InsetToggle)} />
            <span className="lever"></span>
            Inset
          </label>
        </div>
      </div>
      <div className="output">
        <div className="box" style={{boxShadow: `${InsetToggle?"inset":""} ${HorOffset}px ${VerOffset}px ${BlurOffset}px ${ColorValue}`}}>
          <p className="css-output">
            box-shadow: {InsetToggle?"inset":""} {HorOffset}px {VerOffset}px {BlurOffset}px {ColorValue}
          </p>
          <p className="css-output">
            -webkit-box-shadow: {InsetToggle?"inset":""} {HorOffset}px {VerOffset}px {BlurOffset}px {ColorValue}
          </p>
          <p className="css-output">
            -moz-box-shadow: {InsetToggle?"inset":""} {HorOffset}px {VerOffset}px {BlurOffset}px {ColorValue}
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
