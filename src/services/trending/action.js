import trendingAction  from './action';
import {
  FETCH_TRENDING_PENDING,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_ERROR,
  FETCH_PREVIOUS_TRENDING,
}  from './actionType';

import {
  MODAL_CLOSE,
  MODAL_OPEN,
} from '../modal/actionType';

import api from '../../helper/api';

export default {
  getTrending: (status) => (dispatch, getState) => {
    dispatch({
      type: FETCH_TRENDING_PENDING
    });

    //check next or previos to set offset
    if(status === 'previous'){
      dispatch({
        type: FETCH_PREVIOUS_TRENDING
      });
    }

    //get value of offset from store to handle api
    const offset = getState().trending.offset;

    api.get('gifs/trending', {
      extraParam: {
        limit: 20,
        offset: offset
      }
    }).then((res) => {
      dispatch({
        type: FETCH_TRENDING_SUCCESS,
        payload: res.data.data
      });
    })
      .catch(error => {
        console.log('error');
        dispatch({
          type: FETCH_TRENDING_ERROR,
          payload: error
        });
      });
  },
  openModal: data => dispatch => {
    dispatch({
      type: MODAL_OPEN,
      data
    });
  },
  closeModal: () => dispatch => {
    dispatch({
      type: MODAL_CLOSE
    })
  },
};