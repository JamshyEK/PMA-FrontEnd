import {baseUrl,headers} from '../../shared/baseUrl'
import axios from 'axios';


export const postRequest = (values) =>  {
  
    return axios.post(baseUrl +'user/request',values,{"headers" : headers})

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
        alert("Request Success" +JSON.stringify(response));
      })
      .catch((error) => {
        console.log("Request Failed", error.message);
        alert("Request Failed \nError: " + error.message);
      });
  };