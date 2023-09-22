export default function Alert({handleClick, handleChange, setInputValue}) {

  return(
    <>
    <button onClick={handleClick}>Click me</button>
    <input id="input" onChange={handleChange}></input>
    </>
  )
}