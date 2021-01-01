import React from "react";

// function Food(props) {
  function Food({fav}) { // {fav} props라는 object에서 fav를 꺼낸다.
  /** props를 사용한 데이터 넘기기/받기 */
  return (
    <h1>I like {fav}</h1> 
  )
}

function App() {
  const jay = 'jay'
  return (
    <div className="App">
      <h1>Hello !!! { jay }</h1>
        <Food fav="kimchi" />
        <Food fav="ramen" />
        <Food fav="samgopsal" />
    </div>
  )
}

export default App;
