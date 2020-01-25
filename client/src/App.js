import React from "react";
import "./App.css";
import axios from "axios";

import PlayerCard from "./components/PlayerCard";
import Navigation from "./components/Navigation";

class App extends React.Component {
  state = {
    playerData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({ playerData: response.data });
        console.log("gg: player data: ", response.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <center>
          <Navigation />
        </center>

        {this.state.playerData.map(player => (
          <center>
            <PlayerCard
              key={player.id}
              name={player.name}
              country={player.country}
              searches={player.searches}
            />
          </center>
        ))}
      </div>
    );
  }
}

export default App;
