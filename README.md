# moviemovie

### 영화 정보 웹사이트 with React.js

#### 첫번째 React 프로젝트

> https://ykkim-git.github.io/moviemovie/ 수정 중

---

## 01/02/2021

### prop-types

전달받은 props의 정보를 확인하는 라이브러리 <br>

1. npm i prop-types
2. import PropTypes from "prop-types"

- **Module not found** 발견 시 npm i 설치 후 npm 재가동

3.

```js
import PropTypes from "prop-types";

const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string,
};
```

- isRequired
  .isRequired를 types뒤에 붙여주면 필수 prop으로 인식하고, 값이 없거나 잘못되었을 경우 콘솔 창에서 오류를 확인할 수 있다.

```js
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
```

---

## 03/01/2021

### State: Component의 data

```js
class App extends React.Component {
  state = {
    count: 0
  };
}

add = () => {
    /** Do not mutate state directly. Use setState()
     * React Doesn`t refresh Render Function
     * 매번 state의 상태를 변경할 때 react가 render function을 호출해서 바꿔줘야함
     * setState를 호출하면 state를 refresh하고 renderfunction 호출
    */

    // this.state.count = 1;  <-- 에러 (직접변경 X)
    // this.setState({ count: this.state.count + 1 }); // <-- 외부의 상태에 의존
    this.setState(current => ({ count: current.count + 1 })); // <-- 외부 상태에 의존하지 않는 방법
  }
  minus = () => {
    // this.state.count = -1;
    // this.setState({ count: this.state.count - 1 });
    this.setState(current => ({ count: current.count - 1 }));
  }

/**
   * React.Component에서 상속받은 render 함수
   * react는 자동적으로 모든 class component의 render method를 실행함
   */
  render() {
    return (
      <div>
        <h1>The number is: { this.state.count }</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
```

### Component Life Cycle

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello constructor')
  }
}

/** component가 render 되고난 후 실행 */
  componentDidMount() {
    console.log('component rendered')
  }

  /** state가 업데이트 되면 render()실행 후 실행 */
  componentDidUpdate() {
    console.log('component update')
  }

  /** component가 떠날 때 실행 */
  componentWillUnmount() {
    console.log('Goodbye...')
  }

  render() {
    console.log('i`m rendering')
    return ()
  }
```

### 순서

1. hello constructor
2. i`m rendering
3. component rendered

### state update

1. i`m rendering
2. component update

---

## 04/01/2021

### API 통신 (영화 API)

API통신을 위한 axios 설치

**설치 : npm i axios**

```js
import axios from "axios";
```

### - API통신하여 값을 받아온 후 state에 저장하여 Rendering

```js
class App extends React.Component {
  state = {
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating" // 영화 API request URL / method: get
    );
    this.setState({ movies, isLoading: false }); 
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {
          isLoading ?
          (
            <div className="loader">
              <span className="loader__text">Loading ...</span>
            </div>
          ) :
          (
            movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })
          )
        }
      </section>
    );
  }

```
___

### Movie.js (영화)

```js
import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      ... 화면구성 with arguments
    </div>
  );
}

Movie.propTypes = {
  ... 사용하는 데이터들의 propTypes 설정
};

export default Movie;
```
