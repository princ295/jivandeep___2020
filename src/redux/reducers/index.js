
import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import user from "./user";
import Steperform from "./Steperform";

const rootReducer = combineReducers({
  user, reducerForm, Steperform
});
export default rootReducer;