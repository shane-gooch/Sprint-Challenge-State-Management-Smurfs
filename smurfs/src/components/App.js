import React, { Component, useState } from "react";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon } from "semantic-ui-react";

import SmurfList from "./SmurfLlst";
import SmurfForm from "./SmrufForm";

import { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf } from "../actions";
import { connect } from "react-redux";

function App({ fetchSmurfs, addSmurf, deleteSmurf, smurfs, updateSmurf }) {
  const [smurfToEdit, setSmurfToEdit] = useState("");
  const editSmurf = updatedSmurf => {
    setSmurfToEdit(updatedSmurf);
  };

  const sendUpdateSmurf = smurf => {
    updateSmurf(smurf.id, smurf);
    setSmurfToEdit("");
  };
  return (
    <div className="App">
      <Header as="h1" icon textAlign="center">
        <Icon name="angle double down" circular />
        <Header.Content>Smurf List</Header.Content>
      </Header>
      <SmurfForm
        addSmurf={addSmurf}
        smurfToEdit={smurfToEdit}
        sendUpdateSmurf={sendUpdateSmurf}
      />
      <SmurfList
        fetchSmurfs={fetchSmurfs}
        deleteSmurf={deleteSmurf}
        smurfs={smurfs}
        editSmurf={editSmurf}
      />
    </div>
  );
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
  { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);
