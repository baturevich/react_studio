const INITIALIZING = "INITIALIZING"

const initialState = {
    initializing: false,
    
}

const appReducer = (state = initialState, action)=>{
    switch (action.type){
        case INITIALIZING:{
            return{ ...state, initializing: true}
        }
        default:{
            return state
        }
    }
}

export const initializingAC = () =>({type: INITIALIZING})

export default appReducer