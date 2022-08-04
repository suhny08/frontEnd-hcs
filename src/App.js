import React, { useState } from "react";
import './App.css';
import './reset.css';
import Slider from './components/Slider';
import TapList from './components/TapList';
import Selector from './components/Selector';
import FLists from './components/FList';
import FooterButton from './components/FooterButton.js';



function App() {

  const [tapId, setTapId] = useState("Rcmm");
  
  const getTapId = id => {
    setTapId(id)
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>자산정보 연동하기</p>
        <h1>연동할 금융사를 선택하세요</h1>
        <h3>금융사에서 제공되는 전체 서비스가 선택됩니다.</h3>
      </div>
      <Slider /> 
      <TapList tapId={tapId} getTapId={getTapId}/>
      <Selector /> 
      <FLists tapId={tapId}/>
      <FooterButton />
    </div>
    

  );
}

export default App;
