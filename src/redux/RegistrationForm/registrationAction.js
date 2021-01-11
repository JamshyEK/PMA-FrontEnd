import {baseUrl} from '../../shared/baseUrl'
import axios from 'axios';


export const postRegistration = (values) =>  {

    return axios.post(baseUrl +'user/signup',values)

      .then(
        (response) => {
            console.log(response);
          if (response.status===201) {
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
          console.log(response);
        alert("Registration Success" +JSON.stringify(response));
      })
      .catch((error) => {
        console.log("Registration Failed", error.message);
        alert("Registration Failed \nError: " + error.message);
      });
  };