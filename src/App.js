import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Count {this.props.count}</p>

          <div className="container">
            <button className="button" onClick={() => this.props.increment()}>
              +
            </button>
            <button className="button" onClick={() => this.props.decrement()}>
              -
            </button>
            <button
              className="button"
              onClick={() => this.props.increaseBy({ value: 5 })}
            >
              +5
            </button>
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INC" }),
    decrement: () => dispatch({ type: "DSC" }),
    increaseBy: (payload) => dispatch({ type: "INC5", payload }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
