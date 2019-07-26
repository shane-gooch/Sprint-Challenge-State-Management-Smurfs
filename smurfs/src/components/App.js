import React, { Component } from "react";
import "./App.css";

import SmurfList from "./SmurfLlst";
import SmurfForm from "./SmrufForm";

import { fetchSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetchSmurfs, addSmurf, smurfs } = this.props;
    return (
      <div className="App">
        <h1>Smurf List</h1>
        <SmurfForm addSmurf={addSmurf} />
        <SmurfList fetchSmurfs={fetchSmurfs} smurfs={smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
