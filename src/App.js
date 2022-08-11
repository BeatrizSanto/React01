import React, {Component} from "react";
import fruit from "imagem/uva-familia-burch-sandro_c_-4.jpg";

class App extends Component{

  state = {
    name: "Beatriz",
    age: 25,
    favoriteFood: "Lasanha",
    favoriteMusic:["lovely", "Nothing breaks like a heart", "Always Remember Us This Way"]
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <h3>{this.state.favoriteFood}</h3>
        <h4>Fruta Favorita</h4>
        <img src={fruit} title="Uva" alt="Uva-img"/>
        <h2>Música Favorita</h2>
        <ul>
          <li>{this.state.favoriteMusic[0]}</li>
          <li>{this.state.favoriteMusic[1]}</li>
          <li>{this.state.favoriteMusic[2]}</li>
        </ul>
      </div>
    )
  }
}

export default App;