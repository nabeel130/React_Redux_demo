const redux = require('redux');
const createStore = redux.createStore

//acction

const BY_CAKE = 'BUY_CAKE';



function buyCake(){
    return {
        type : BY_CAKE,
        info : "first redux action"
    }
}

//reducer  //(previousState , action) => newState

const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case BY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }

        default : return state
    }
}

const store = createStore(reducer)
console.log('initial state' , store.getState())
const unsubscribe = store.subscribe(() => console.log('Update state' , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()