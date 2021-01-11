import {ADD_PROFILE,PROFILE_ERROR,PROFILE_LOADING} from './UserProfileType'
import {baseUrl,headers} from '../../shared/baseUrl'
import axios from 'axios';



export const fetchProfile = () => (dispatch) => {


    dispatch(profileLoading());
    // setTimeout(()=>{
    //   dispatch(addDishes(DISHES));
    // },2000)
    return axios.get(baseUrl +'user/profile',{"headers" : headers})
      .then(
        (response) => {
          
          if (response.status===200) {
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
      .then((response) =>{ 
        console.log(response.data)
        dispatch(addProfile(response.data))
        //response.data.json()
      })
      // .then((profile) => {
      //   console.log("+++++",profile.data)
      //   dispatch(addProfile(profile))})
      .catch((error) => dispatch(profileErr(error.message)));
  };
  
  export const addProfile = (PROFILE) => ({
    type: ADD_PROFILE,
    payload: {
      profile: PROFILE,
    },
  });
  
  export const profileLoading = () => ({
    type: PROFILE_LOADING
  });
  
  export const profileErr = (msg) => ({
    type: PROFILE_ERROR,
    payload: { profileErr: msg }
  });