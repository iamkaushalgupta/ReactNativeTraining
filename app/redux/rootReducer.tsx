import { LIGHT_THEME,DARK_THEME } from "./type"
import { darkTheme,lightTheme } from "../constants"

const initialState = {
    theme :lightTheme
}

const rootReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case LIGHT_THEME:
            return { ...state,theme:lightTheme }
        case DARK_THEME:
            return { ...state,theme: darkTheme }
    }
    return state
}

export default rootReducer;