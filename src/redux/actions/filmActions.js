import axios from 'axios'
import { ActionsTypes } from '../constants/actionsTypes'

export const fetchFilms = (page) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=9083abb42b622dd62d2cf06d9d2cf060&page=${page ? page : 1}`)
      dispatch({ type: ActionsTypes.FETCH_FILMS, payload: response.data })
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchDetailFilm = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9083abb42b622dd62d2cf06d9d2cf060&language=en-US`)
      dispatch({ type: ActionsTypes.FETCH_DETAIL_FILM, payload: response.data })
    } catch (e) {
      console.log(e);
    }
  }
}

export const fetchCredit = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=9083abb42b622dd62d2cf06d9d2cf060&language=en-US`)
      dispatch({ type: ActionsTypes.FETCH_CREDIT_FILM, payload: response.data })
    } catch (e) {
      console.log(e);
    }
  }
}

export const fetchReviewFilm = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=9083abb42b622dd62d2cf06d9d2cf060&language=en-US&page=1`)
      dispatch({ type: ActionsTypes.FETCH_REVIEW_FILM, payload: response.data })
    } catch (e) {
      console.log(e);
    }
  }
}

export const removeDetailFilm = () => {
  return {
    type: ActionsTypes.REMOVE_DETAIL_FILM,
  }
}

export const removeCreditFilm = () => {
  return {
    type: ActionsTypes.REMOVE_CREDIT_FILM
    ,
  }
}

export const removeReviewFilm = () => {
  return {
    type: ActionsTypes.REMOVE_REVIEW_FILM
    ,
  }
}