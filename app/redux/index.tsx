import React from "react";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'
import Counterdemo from './store'

const store = createStore(rootReducer)

 const ReduxApp1 =()=> {

    
        return (
            <Provider store={store}>
                <Counterdemo />
            </Provider>
        );
    
}

export default ReduxApp1