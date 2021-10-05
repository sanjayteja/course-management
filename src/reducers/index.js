import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import categoryReducers from "./categoryReducers";
import courseReducers from "./courseReducers";
import assignmentReducers from "./assignmentReducers";

export default combineReducers({
  errors: errorReducer,
  categories: categoryReducers,
  courses: courseReducers,
  assignments:assignmentReducers
});
