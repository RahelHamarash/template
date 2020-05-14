import {
    TOGGLE_ACTIVE, ADD_NUMBER, TOGGLE_SIDEBAR
} from "./actionTypes"

const initialState = {
    isActive: false,

}

export default (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_SIDEBAR:
            return { ...state, isActive: !state.isActive } 
        default:
            return {...state}
    }
}