import Axios from "axios"

//Log in Actions
export const FETCH_LOG_IN = 'FETCH_LOG_IN'
export const FETCH_LOG_IN_SUCCESS = 'FETCH_LOG_IN_SUCCESS'
export const FETCH_LOG_IN_ERROR = 'FETCH_LOG_IN_ERROR'

//Sign up Actions
export const START_SIGNUP = 'START_SIGNUP'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const logIn = (credentials) => dispatch => {
  dispatch({ type: FETCH_LOG_IN })
  Axios.post()
    .then(res => {
      dispatch({ type: FETCH_LOG_IN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_LOG_IN_ERROR, payload: err.message })
    })
}

export const signUp = userInfo => dispatch => {
  dispatch({ type: START_SIGNUP })
  Axios.post()
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.message })
    })
}