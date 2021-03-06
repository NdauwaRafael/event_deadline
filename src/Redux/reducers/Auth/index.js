/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import {
    CHECKING_AUTH_STATE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILED,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED

} from '../../constants/ActionTypes';

let initialState = {
    isLoggedIn: false,
    loadingAuthStatus: false,
    createUserError: '',
    userId: '',
    updateError: '',
    userDetails: {},
    fetchUserError: '',
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHECKING_AUTH_STATE:
            return {...state, loadingAuthStatus: true}
        case LOGIN_USER_SUCCESS :
            let user = {};
            user.email = action.user.email;
            user.uid = action.user.uid
            return {...state, isLoggedIn: true, userId: action.user.uid, user: Object.assign({}, user), loadingAuthStatus: false};
        case LOGOUT_USER_FAILED:
            return {...state, isLoggedIn: false, userId: '', loadingAuthStatus: false};
        case LOGOUT_USER_SUCCESS :
            return {...state, isLoggedIn: false, userId: ''};
        case CREATE_USER_SUCCESS :
            return {...state, user: action.user};
        case CREATE_USER_FAILED :
            return {...state, createUserError: action.error};
        case UPDATE_USER_SUCCESS :
            return {...state, userDetails: Object.assign({}, action.userDetails)};
        case UPDATE_USER_FAILED :
            return {...state, updateError: action.updateError};
        case FETCH_USER_SUCCESS:
            return {...state, userDetails: Object.assign({}, action.userDetails)};
        case FETCH_USER_FAILED:
            return {...state, fetchUserError: action.error};
        default:
            return state;
    }
}