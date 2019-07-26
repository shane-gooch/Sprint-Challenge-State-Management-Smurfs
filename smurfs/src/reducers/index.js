import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAIL,
  UPDATE_SMURFS_START,
  UPDATE_SMURFS_SUCCESS,
  UPDATE_SMURFS_FAIL
} from "../actions";

const inititalState = {
  isLoading: false,
  error: "",
  smurfs: []
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "Unable to load smurfs..."
      };
    case ADD_SMURFS_START:
      return {
        ...state
      };
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADD_SMURFS_FAIL:
      return {
        ...state,
        error: "Unable to add smurf..."
      };
    case UPDATE_SMURFS_START:
      return {
        ...state
      };
    case UPDATE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case UPDATE_SMURFS_FAIL:
      return {
        ...state,
        error: "Unable to update smurf..."
      };
    default:
      return state;
  }
};

export default reducer;
