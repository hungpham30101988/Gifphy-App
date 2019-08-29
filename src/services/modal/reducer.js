import {
  MODAL_OPEN,
  MODAL_CLOSE,
  PHOTO_ON_LOAD
} from './actionType';

const initialState = {
  isOpen: false,
  isLoading: false,
  isPhotoLoading: true,
  data: ''
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        data: action.data,
        isPhotoLoading: true
      }
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false
      }
    case PHOTO_ON_LOAD:
      return {
        ...state,
        isPhotoLoading: false
      }

    default:
      return state;
  }
};

export default modalReducer;