import React from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import "./App.css";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 6 },
    ],
  };

  constructor() {
    super();
    console.log("App-Constructor");
  }

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  // handleIncrement = (counter) => {
  //   const counters = this.state.counters.map((myCounter) => {
  //     if (myCounter.id === counter.id) {
  //       myCounter.value++;
  //     }
  //     return myCounter;
  //   });
  //   this.setState({ counters });
  // };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // Whole counters is cloned
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // Only the counter which is being incremented gets cloned in counters itself
    counters[index].value++; // Now our 'counters' Object doesn't get modified directly
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; // Whole counters is cloned
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // Only the counter which is being incremented gets cloned in counters itself
    if (counters[index].value > 0) {
      counters[index].value--; // Now our 'counters' Object doesn't get modified directly
    }
    this.setState({ counters });
  };

  componentDidMount() {
    console.log("App-Mounted");
  }

  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
