import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    sets: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/sets/getall`).then((res) => {
      console.log(res.data);
      const sets = res.data;
      this.setState({ sets });
    });
  }
  render() {
    return (
      <div className="home">
        <div className="set_display">
          <ul>
            {this.state.sets.map((sets) => (
              <li>
                <a href="./Set">{sets.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="new_cards"></div>
      </div>
    );
    /*return (
      <ul>{ this.state.persons.map(person => <li>{person.name}</li>)}</ul>
    <div className="home">This is an empty Website.</div>
    );*/
  }
}

export default Home;
