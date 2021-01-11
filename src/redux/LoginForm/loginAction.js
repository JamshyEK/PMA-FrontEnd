import {baseUrl, headers} from '../../shared/baseUrl'
import axios from 'axios';
import jwt from 'jwt-decode'


export const postLogin =async (values,dispatch) =>  {

  
     return axios.post(baseUrl +'user/signin',values)


      .then(
        (response) => {
           // console.log(response);
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
      .then((response) => response.data)
      .then(response=>{
         // console.log(response);
        //   const token=JSON.stringify(response);
        //   var obj = JSON.parse(token);
        const data = jwt(response.access_token);
        // alert(response.access_token);
        localStorage.setItem('token', response.access_token); 
        headers.Authorization= 'Bearer '+ localStorage.getItem('token')
       //console.log("========",data);
      // dispatch(loginSuccess(data))
        //console.log(localStorage.getItem('token'));
        //alert("Login Success" +JSON.stringify(response));
        return data;
      })
      .catch((error) => {
       // return error
        console.log("Login Failed", error.message);
        // alert("Login Failed \nError: " + error.message);
      });

  };