const initialState = [];

export const coursesReducer = (state = initialState,action)=>{
    switch(action.type){
        case "GET_COURSES":
            return action.payload
        default:
            return state
    }
}