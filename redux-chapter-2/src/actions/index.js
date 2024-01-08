import axios from "axios"

export const inc = 'account/increment'
export const dec = 'account/decrement'
export const incByAmt = 'account/incrementByAmount'
export const incBonus = 'bonus/increment'
export const getAccUserPending = 'account/getUser/pending'
export const getAccUserFulfilled = 'account/getUser/fulfilled'
export const getAccUserRejectd = 'account/getUser/rejected'


export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending())
      const { data } = await axios(`http://localhost:5000/accounts/${id}`)

      console.log(data)

      dispatch(getAccountUserFulfilled(data.amount))
    } catch (error) {
      dispatch(getAccountUserRejected(error.message))
    }
  }
}

export function getAccountUserFulfilled(value) {
  return { type: getAccUserFulfilled, payload: value }
}
export function getAccountUserPending() {
  return { type: getAccUserPending }
}
export function getAccountUserRejected(error) {
  return { type: getAccUserRejectd, error: error }
}

export function increment() {
  return { type: inc }
}

export function decrement() {
  return { type: dec }
}

export function incrementByAmount(value) {
  return { type: incByAmt, payload: value }
}

export function incrementBonus() {
  return { type: incBonus }
}