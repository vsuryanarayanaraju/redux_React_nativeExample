export default class AuthActions {
  static SET_USER = payload => {
    console.log();
    return {
      type: 'SET_USER',
      payload: payload,
    };
  };
  static LOG_OUT = () => {
    return {
      type: 'LOG_OUT',
    };
  };
  static UPDATE_USER = payload => {
    return {
      type: 'LOG_OUT',
      payload: payload,
    };
  };
}
