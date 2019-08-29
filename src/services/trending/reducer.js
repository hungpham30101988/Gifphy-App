import {
  FETCH_TRENDING_PENDING,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_ERROR,
  FETCH_PREVIOUS_TRENDING,
  FETCH_NEXT_TRENDING
}  from './actionType';

export const initialState = {
  pending: false,
  trendings: [],
  error: null,
  offset: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        pending: false,
        trendings: action.payload,
        offset: state.offset + 20
      }
    case FETCH_TRENDING_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_PREVIOUS_TRENDING:
      return {
        ...state,
        offset: state.offset - 40,
      }
    default:
      return state;
  }
}
