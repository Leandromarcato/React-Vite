import { type } from '../types/type'

export const authReducer = (state, action)=>{

    switch (action.type) {
    case type.login:
      return {
        isLogged: true,
        ...action.payload
}
case type.logout:
    return {
        isLogged: false,
       
    }

    default:
      return state
    }
}