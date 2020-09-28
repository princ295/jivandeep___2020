
import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import user from "./user";
import Steperform from "./Steperform";
import Cadover from "./Cadover";

const rootReducer = combineReducers({
  user, reducerForm, Steperform, Cadover
});
export default rootReducer;