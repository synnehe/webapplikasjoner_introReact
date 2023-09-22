import './css/main.css'
import Food from './components/Food';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  const food = ['Pizza', 'Hamburger', 'Coke'];

  function handleClick(){
    console.log("Clicked")
    window.alert(document.getElementById("input").value)
    setIsClicked(!isClicked)
  }

  function handleChange(){
    setInputValue(document.getElementById("input").value)
  }

  return (
  <>
  <Wrapper><MyComponent /></Wrapper>
  <Food food={food}/>
  <p>{isClicked ? inputValue : null}</p>
  <Alert setInputValue={setInputValue} handleClick={handleClick} handleChange={handleChange}/>
  </>
  );
}

export default App;
