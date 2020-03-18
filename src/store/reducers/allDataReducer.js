import {initialState} from './initionalState';
import {ALL_DATA} from '../../constants/allData';

export function allDataReducer(state = initialState.allData, action) {
  switch (action.type) {
    case ALL_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
}