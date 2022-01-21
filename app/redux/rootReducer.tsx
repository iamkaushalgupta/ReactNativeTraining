import { DECREASE_COUNTER, Add_Profile } from './type'
const initialState = {
    profile:'https://kaushalgupta.netlify.app/img/kaushal-passport.jpeg'
}

const rootReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case Add_Profile:
            return { ...state,profile:action.payload }
    }
    return state
}

export default rootReducer;