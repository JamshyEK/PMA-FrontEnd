import {
  ADD_ALL_REQUESTS,
  ALL_REQUESTS_LOADING,
  ALL_REQUESTS_ERROR,
  DELETE_REQUEST,
} from "./AllRequestType";
import { baseUrl, headers } from "../../shared/baseUrl";
import axios from "axios";

export const fetchAllRequests = () => (dispatch) => {
  dispatch(AllRequestsLoading());
  // setTimeout(()=>{
  //   dispatch(addDishes(DISHES));
  // },2000)
  return (
    axios
      .get(baseUrl + "user/requestall", { headers: headers })
      .then(
        (response) => {
          console.log("------", response);
          if (response.status === 200) {
            return response;
          } else {
            var error = new Error(
              "Error:" + response.status + ":" + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errMsg = new Error(error.message);
          throw errMsg;
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch(addAllRequests(response.data));
        //response.data.json()
      })
      // .then((profile) => {
      //   console.log("+++++",profile.data)
      //   dispatch(addProfile(profile))})
      .catch((error) => dispatch(AllRequestsErr(error.message)))
  );
};

export const deleteRequest = (id) => (dispatch) => {
  console.log(id);

  return axios
    .delete(baseUrl + "user/requestDelete/" + id, { headers: headers })
    .then(
      (response) => {
        console.log("------", response);
        if (response.status === 200) {
          return response;
        } else {
          var error = new Error(
            "Error:" + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => {
      console.log(response.data);
      // dispatch(addAllRequests(response.data))
      // console.log("before");
      // dispatch(fetchAllRequests());
      
      dispatch(requestDelete(id));
      
    })

    .catch(
      (error) => console.log(error)
      // dispatch(AllRequestsErr(error.message))
    );
};

export const requestDelete = (ID) => ({
  type: DELETE_REQUEST,
  payload: {
    request_id: ID,
  },
});

export const addAllRequests = (ALL_REQUESTS) => ({
  type: ADD_ALL_REQUESTS,
  payload: {
    all_requests: ALL_REQUESTS,
  },
});

export const AllRequestsLoading = () => ({
  type: ALL_REQUESTS_LOADING,
});

export const AllRequestsErr = (msg) => ({
  type: ALL_REQUESTS_ERROR,
  payload: { allRequestErr: msg },
});
