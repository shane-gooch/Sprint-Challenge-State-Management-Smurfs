import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START ";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS ";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL ";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_SMURFS_FAIL });
    });
};

export const ADD_SMURFS_START = "ADD_SMURFS_START ";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS ";
export const ADD_SMURFS_FAIL = "ADD_SMURFS_FAIL ";

export const addSmurf = (e, newSmurf) => dispatch => {
  console.log(newSmurf);
  e.preventDefault();
  dispatch({ type: ADD_SMURFS_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: ADD_SMURFS_FAIL });
    });
};

export const DELETE_SMURFS_START = "DELETE_SMURFS_START ";
export const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS ";
export const DELETE_SMURFS_FAIL = "DELETE_SMURFS_FAIL ";

export const deleteSmurf = smurfId => dispatch => {
  dispatch({ type: DELETE_SMURFS_START });
  axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: DELETE_SMURFS_FAIL });
    });
};

export const UPDATE_SMURFS_START = "UPDATE_SMURFS_START ";
export const UPDATE_SMURFS_SUCCESS = "UPDATE_SMURFS_SUCCESS ";
export const UPDATE_SMURFS_FAIL = "UPDATE_SMURFS_FAIL ";

export const updateSmurf = (smurfId, updatedSmurf) => dispatch => {
  dispatch({ type: UPDATE_SMURFS_START });
  axios
    .put(`http://localhost:3333/smurfs/${smurfId}`, updatedSmurf)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_SMURFS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: UPDATE_SMURFS_FAIL });
    });
};
