import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(this.props);
    if (location.state) {
      return (
        <div>
          <p><span>{location.state.title}</span></p>
          <img src={location.state.poster} alt={location.state.title} />
        </div>
        )
    } else {
      return null;
    }
  }
}
export default Detail;
