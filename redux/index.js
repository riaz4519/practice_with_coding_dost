import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
import axios from 'axios'
// action name constants
const init = 'init'
const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmount'

// store
const store = createStore(reducer, applyMiddleware(logger.default, thunk))

// reducer function
function reducer(state = { amount: 1 }, action) {
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

  // if (action.type === inc) {
  //   return { amount: state.amount + 1 }
  // }
  // if (action.type === dec) {
  //   return { amount: state.amount - 1 }
  // }
  // if (action.type === incByAmt) {
  //   return { amount: state.amount + action.payload }
  // }

  // return state
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

async function getUser(dispatch, getState) {
  const { data } = await axios('http://localhost:3000/accounts/1')

  dispatch(initUser(data.amount))
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

setInterval(() => {
  store.dispatch(getUser)
}, 5000)
