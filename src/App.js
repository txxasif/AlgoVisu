import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Player from "./pages/Player/Homepage";
import Header from "../src/components/header/header.component";
import Bubble_Sort from "../src/algo/bubble";
import Sort from "./pages/Sorting/Sort";
import { notify } from "react-notify-toast";
import data2 from "./playerdata/data2";
import SortingVisualizer from "../src/pages/SortingVisualizer/SortingVisualizer";
import Binary from "../src/components/AlgoVisuCompo/binaryvisu/binary";
import Homepage from "../src/pages/Homepage/homepage";
class App extends React.Component {
  state = {
    mons: data2,
    search: ""
  };
  sort = () => {
    let z = Bubble_Sort(this.state.mons);
    this.setState({ mons: z[0] });
    notify.show(`Sorted by Name`, "success", 5000);
  };
  delete = value => {
    var x = this.state.mons;
    x.splice(value, 1);
    this.setState({ mons: x });
  };
  search = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    const { mons, search } = this.state;
    const monster = mons.filter(m =>
      m.Name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/sort"
            render={() => <Sort sort={() => this.sort} monster={monster} />}
          />
          <Route path="/algovisu" component={SortingVisualizer} />
          )} />
          <Route path="/binary" component={Binary} />
          <Route
            path="/player"
            render={() => (
              <Player
                monster={monster}
                click={this.delete}
                search={this.search}
              />
            )}
          />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
