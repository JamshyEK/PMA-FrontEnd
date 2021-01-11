import { login_success,logout_success,login_failed } from "./profileType";

const profileState = {
  isLoggedIn: false,
  username: "",
  userid: "",
  role: "",
  error:""
};

const profileReducer = (state = profileState, action) => {
  switch (action.type) {
    case login_success:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.name,
        userid: action.payload.id,
        role: action.payload.role,
        error:""
      };
      case logout_success:
        return {
          ...state,
          isLoggedIn: false,
          username: "",
          userid: "",
          role: "",
          error:""
        };
        case login_failed:
          return {
            ...state,
            isLoggedIn: false,
            username: "",
            userid: "",
            role: "",
            error:"That's not the right password.!"
          };
    default:
      return state;
  }
};

export default profileReducer;
