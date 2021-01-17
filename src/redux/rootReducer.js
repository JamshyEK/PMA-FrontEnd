import {combineReducers} from 'redux'
import {createForms} from 'react-redux-form';
import {initialRegistration} from './RegistrationForm/registration'
import {initiallogin} from './LoginForm/login'
import {initialRequest} from './RequestForm/request'
import profileReducer from './Profile/profileReducer'
import UserProfileReducer from './UsersProfile/UserProfileReducer'
import AllRequestReducer from './AllRequests/AllRequestReducer'
import AllRequestAdminReducer from './AllRequestsAdmin/AllRequestReducer'

const rootReducer=combineReducers({
    profileStatus:profileReducer,
    profileDetails:UserProfileReducer,
    allRequest:AllRequestReducer,
    allRequestAdmin:AllRequestAdminReducer
    ,...createForms({
        registration: initialRegistration,
        login:initiallogin,
        request:initialRequest,
    })
})

export default rootReducer