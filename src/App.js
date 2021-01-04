import React from "react";
import axios from "axios";
import Movie from "./Movie.js";
import PropTypes from "prop-types";
import "./App.css";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    /** async, await: 이 함수는 비동기 & axios가 끝날때까지 기다렸다가 실행 */
    // const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);

    /** 위 방법 축약 */
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading ...</span>
          </div>
        ) : (
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
        )}
      </section>
    );
  }
}
export default App;

// https://yts-proxy.nomadcoders1.now.sh/list_movies.json
