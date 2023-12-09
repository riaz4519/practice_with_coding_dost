import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
import axios from 'axios'
import { combineReducers } from 'redux'
// action name constants
const init = 'account/init'
const inc = 'account/increment'
const dec = 'account/decrement'
const incByAmt = 'account/incrementByAmount'
const incBonus = 'bonus/increment'

// store
const store = createStore(
  combineReducers({ account: accuntReducer, bonus: bonusReducer }),
  applyMiddleware(logger.default, thunk)
)

// reducer function
function accuntReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload }
    case inc:
      return { amount: state.amount + 1 }

    case dec:
      return { amount: state.amount - 1 }

    case incByAmt:
      return { amount: state.amount + action.payload }
    default:
      return state
  }
}

function bonusReducer(state = { points: 1 }, action) {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 }

    case incByAmt:
      if (action.payload >= 100) {
        return { points: state.points + 1 }
      }

    default:
      return state
  }
}

// global state
// console.log(store.getState())

// store.subscribe(() => {
//   console.log(store.getState())
// })

// async alll
// async function getUser() {
//   const { data } = await axios('http://localhost:3000/accounts/1')
//   console.log(data)
// }

// getUser()

// action creators

function getUserAccount(id) {
  return async (dispatch, getState) => {
    const { data } = await axios(`http://localhost:3000/accounts/${id}`)

    dispatch(initUser(data.amount))
  }
}

function initUser(value) {
  return { type: init, payload: value }
}

function increment() {
  return { type: inc }
}

function decrement() {
  return { type: dec }
}

function incrementByAmount(value) {
  return { type: incByAmt, payload: value }
}

function incrementBonus() {
  return { type: incBonus }
}

setInterval(() => {
  store.dispatch(incrementBonus())
}, 5000)
