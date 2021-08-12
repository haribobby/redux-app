const { createStore, applyMiddleware } = require("redux");
const logger = require('redux-logger').default;


//state 
const initialState = {
    balance: 1000
}

// actions
const withdrawMoney = (money) => {
    return { type: "WITHDRAW_MONEY", money: money }
}

// const withdrawMoney = () => {
//     return { type: "WITHDRAW_MONEY" }
// }

//reducer

const reducer = (state = initialState, action) => {

    // console.log(action)

    if (action.type === "WITHDRAW_MONEY") {
        return { balance: state.balance - action.money }
    } else {
        return state;
    }

}

// const reducer = (state = initialState, action) => {

//     // console.log(action)

//     if (action.type === "WITHDRAW_MONEY") {
//         return { balance: state.balance - action.money }
//     } else {
//         return state;
//     }

// }

//store

const store = createStore(reducer,applyMiddleware(logger));

console.log(store);

store.subscribe(() => console.log(store.getState()))

store.dispatch(withdrawMoney(10));
store.dispatch(withdrawMoney(20));
store.dispatch(withdrawMoney(100));