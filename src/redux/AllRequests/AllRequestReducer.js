import {
  ADD_ALL_REQUESTS,
  ALL_REQUESTS_ERROR,
  ALL_REQUESTS_LOADING,
  DELETE_REQUEST,
} from "./AllRequestType";

const AllRequestReducer = (
  state = { loading: true, allRequestErr: null, allRequest: [] },
  action
) => {
  switch (action.type) {
    case ADD_ALL_REQUESTS:
      return {
        ...state,
        loading: false,
        allRequestErr: null,
        allRequest: action.payload.all_requests,
      };
    case ALL_REQUESTS_ERROR:
      return {
        ...state,
        loading: false,
        allRequestErr: action.payload.allRequestErr,
        allRequest: [],
      };
    case ALL_REQUESTS_LOADING:
      return {
         ...state, 
         loading: true, 
         allRequestErr: null, 
         allRequest: [] 
        };
    case DELETE_REQUEST:
      let id = action.payload.request_id;
  
      return { ...state, 
         allRequest:state.allRequest.filter(x=>x._id!==id) };
    default:
      return state;
  }
};

export default AllRequestReducer;
