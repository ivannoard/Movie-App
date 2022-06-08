import { ActionsTypes } from '../constants/actionsTypes'

const initialState = {
  films: null,
  detail: null,
  credit: null,
  review: null
}

export const filmReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.FETCH_FILMS:
      return { ...state, films: payload }
    case ActionsTypes.FETCH_DETAIL_FILM:
      return { ...state, detail: payload }
    case ActionsTypes.REMOVE_DETAIL_FILM:
      return { ...state, detail: null }
    case ActionsTypes.FETCH_CREDIT_FILM:
      return { ...state, credit: payload }
    case ActionsTypes.REMOVE_CREDIT_FILM:
      return { ...state, credit: null }
    case ActionsTypes.FETCH_REVIEW_FILM:
      return { ...state, review: payload }
    case ActionsTypes.REMOVE_REVIEW_FILM:
      return { ...state, review: null }
    default:
      return state
  }
}