import {usersAPI} from '../Api/api';
import {profileAPI} from '../Api/api';

let ADD_POST = 'ADD-POST'
let UPDATE_TEXT = 'UPDATE-TEXT'
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let SET_STATUS = 'SET_STATUS'

let initialState = {
    messagesData: [
        { id: 1, message: 'hi, i lucky!' },
        { id: 2, message: 'hi, i lovely!' },
        { id: 3, message: 'hi, i duck!' },

    ],

    newMessData: '',
    profile: null,
    status: '',
}

const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: state.newMessData }],
                newMessData: ''
            }
        }
        case UPDATE_TEXT: {
            return {
                ...state,
                newMessData: action.newTextik
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
                
            }
        }

        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const updateTextActionCreator = (textik) => ({ type: UPDATE_TEXT, newTextik: textik })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
    // axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
         .then(response => {
             dispatch(setUserProfile(response.data))
         })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    // axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
         .then(response => {
             if(response.data.resultCode === 0) {
                dispatch(setStatus(userId));
             }
         })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    // axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
         .then(response => {
             dispatch(setStatus(status))
         })
}

export default contentReducer