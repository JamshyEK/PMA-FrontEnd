import {
  ADD_ALL_REQUESTS,
  ALL_REQUESTS_LOADING,
  ALL_REQUESTS_ERROR,
  REQUEST_UPDATE
} from "./AllRequestType";
import { baseUrl, headers } from "../../shared/baseUrl";
import axios from "axios";

export const fetchAllRequestsAdmin = () => (dispatch) => {
  dispatch(AllRequestsLoading());
  // setTimeout(()=>{
  //   dispatch(addDishes(DISHES));
  // },2000)
  return (
    axios
      .get(baseUrl + "admin/allRequests", { headers: headers })
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

export const fetchAllRequestsKudumbashree = () => (dispatch) => {
  dispatch(AllRequestsLoading());
  // setTimeout(()=>{
  //   dispatch(addDishes(DISHES));
  // },2000)
  return (
    axios
      .get(baseUrl + "kudumbashree/allRequests", { headers: headers })
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

export const updateRequest = (id, status) => (dispatch) => {
  return axios
    .put(
      baseUrl + "admin/updateRequests",
      { req_id: id, req_status: status },
      { headers: headers }
    )
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

      dispatch(RequestUpdate(id,status));
    })

    .catch(
      (error) => console.log(error)
     
    );
};

export const updateRequestKudumbashree = (id, status) => (dispatch) => {
  return axios
    .put(baseUrl + "kudumbashree/updateRequest/" + id,{}, { headers: headers })
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

      dispatch(RequestUpdate(id,status));
    })

    .catch(
      (error) => {
        console.log("not ok");
        console.log(error);
      }
      // dispatch(AllRequestsErr(error.message))
    );
};

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


export const RequestUpdate=(ID,STATUS)=>({
  type:REQUEST_UPDATE,
  payload:{id:ID,status:STATUS}
})