import { dec, getAccUserFulfilled, getAccUserPending, getAccUserRejectd, inc, incByAmt } from "../actions"

export function accuntReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccUserFulfilled:
      return { amount: action.payload, pending: false }
    case getAccUserRejectd:
      return { ...state, error: action.error, pending: false }
    case getAccUserPending:
      return { ...state, pending: true }
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
