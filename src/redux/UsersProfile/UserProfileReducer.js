import {
  ADD_PROFILE,
  PROFILE_ERROR,
  PROFILE_LOADING,
  UPDATE_CREDIT,
} from "./UserProfileType";

const UserProfileReducer = (
  state = { loading: true, profileErr: null, profile: [] },
  action
) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        loading: false,
        profileErr: null,
        profile: action.payload.profile,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        profileErr: action.payload.profileErr,
        profile: [],
      };
    case PROFILE_LOADING:
      return { ...state, loading: true, profileErr: null, profile: [] };
    case UPDATE_CREDIT:
      console.log(action.payload.credit)
      var prof = state.profile
      prof.credit = action.payload.credit
      return { ...state, profile:prof };
    default:
      return state;
  }
};

export default UserProfileReducer;
