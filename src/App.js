import React from "react";

const foodILike = [
  {
    /** react에서는 list를 안으로 집어넣으면 유일성이 없어진다. 각각의 id로 개별성을 줘야함 */
    id: 1, 
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  }
]

// function Food(props) {
  function Food({name, picture}) { // {fav} props라는 object에서 fav를 꺼낸다.
  /** props를 사용한 데이터 넘기기/받기 */
  return (
    <div>
      <h3>I like {name} </h3> 
      <img src={picture} alt={name} />
    </div>
  )
}

function App() {
  const jay = 'jay'
  return (
    <div className="App">
      <h1>Hello !!! { jay } using jsx</h1>
        {
          foodILike.map(dish => 
            <Food key={dish.id} name={dish.name} picture={dish.image} alt={dish.alt} />
          )
        }
    </div>
  );
}
/**
 * map: array의 각 item에 function을 적용하고 array를 리턴
 */

export default App;
