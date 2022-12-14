import React, { useState } from "react";
import './App.css';
import './reset.css';
import Slider from './components/Slider';
import TapList from './components/TapList';
import Selector from './components/Selector';
import FLists from './components/FList';
import FooterButton from './components/FooterButton.js';



export const GridListContext = React.createContext();

function App() {

  const [ sliderType, setSliderType ] = useState("Ind");

  function changeSliderType() {
    setSliderType(sliderType === "Ind" ? "alpb" : "Ind");
  }

  const providerValue = {
    sliderType: "Ind", 
    changeSliderType
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>자산정보 연동하기</p>
        <h1>연동할 금융사를 선택하세요</h1>
        <h3>금융사에서 제공되는 전체 서비스가 선택됩니다.</h3>
      </div>
      <GridListContext.Provider value={providerValue}>
        <Slider /> 
        <TapList />
        <Selector /> 
        <FLists />
        <FooterButton />
      </GridListContext.Provider>
    </div>
    

  );
}

export default App;
