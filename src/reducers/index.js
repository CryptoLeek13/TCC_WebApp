import Location from './Location';
import ReturnBool from './ReturnBool';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  location: Location,
  back: ReturnBool
});

export default allReducers;
