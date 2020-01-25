import React from 'react';
import './App.css';
import axios from "axios";

import PlayerCard from "./components/PlayerCard"

class App extends React.Component {
  state = {
    playerData: [],
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/api/players")
    .then(response => {
      this.setState({ playerData: response.data })
      console.log("gg: player data: ", response.data)
    })
    .catch(error => console.log(error));

  }


  render() {
    return (
      <div>
        {this.state.playerData.map(player => (
          <PlayerCard
          key={player.name}
          name={player.name}
          country={player.country}
          searches={player.searches}
          />
        ))}
      </div>
    )
    }
}

export default App;
