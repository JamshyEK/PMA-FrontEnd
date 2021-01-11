import {login_success,logout_success,login_failed} from './profileType'

export const loginSuccess=(profileDetails)=>{
    return{
        type:login_success,
        payload:profileDetails
    }
}

export const logoutSuccess=()=>{
    return{
        type:logout_success
    }
}

export const loginFailed=()=>{
    return{
        type:login_failed,
        // payload:profileDetails
    }
}