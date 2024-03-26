
import { combineReducers } from 'redux';

const initialState = {
  
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
