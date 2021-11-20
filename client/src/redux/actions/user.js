import axios from 'axios'

export const login = (name, email, password) => async (dispatch) => {
  try {
    dispatch({type: 'LOGIN_REQUEST'})
    const config = {headers: {'Content-type': 'application/json'}}
    const { data } = await axios.post('/api/auth/login', {name, email, password}, config)
    dispatch({type: 'LOGIN_SUCCESS', payload: data})
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL', payload: err.response && err.response.data.message ? err.response.data.message : err.message
    })
  }
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({type: 'REGISTER_REQUEST'})
    const config = {headers: {'Content-type': 'application/json'}}
    const { data } = await axios.post('/api/auth/register', {name, email, password}, config)
    dispatch({type: 'REGISTER_SUCCESS', payload: data})
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (err) {
    dispatch({
      type: 'REGISTER_FAIL', payload: err.response && err.response.data.message ? err.response.data.message : err.message
    })
  }
}

export const logout = () => async dispatch => {
  localStorage.removeItem('userInfo')
  dispatch({type: 'LOGOUT'})
  document.location.href = '/login'
}