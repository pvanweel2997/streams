import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload,'id')};
    case FETCH_STREAM: // add new stream to the end of the object
      return { ...state, [action.payload.id] : action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id] : action.payload }
    case EDIT_STREAM:
      return { ...state, [action.payload.id] : action.payload }
    case DELETE_STREAM: // don't need to specity action.payload.id as the payload has only the id in it.
      return _.omit(state,action.payload)
    default:
      return state;
  }
}