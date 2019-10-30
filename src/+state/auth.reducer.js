const INITIAL_STATE = {
  user: {},
};

export const authReducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state);
  const {type, payload} = {...action};
  switch (type) {
    case 'SET_USER':
      newState.user = payload;
      break;
    case 'LOG_OUT':
      newState.user = {};
      break;
    case 'UPDATE_USER':
      newState.user.data.user = payload;
      break;
    default:
      break;
  }
  return newState;
};
