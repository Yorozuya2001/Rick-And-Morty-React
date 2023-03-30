export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_TO_FAVORITES = "REMOVE_TO_FAVORITES";
export const GET_FAVORITES = "GET_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addToFavorites = (character) => {
  return { type: ADD_TO_FAVORITES, payload: character };
};

export const removeToFavorites = (id) => {
  return {
    type: REMOVE_TO_FAVORITES,
    payload: id,
  };
};

export const getFavorites = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/rickandmorty/fav");
      const data = await response.json();

      dispatch({
        type: GET_FAVORITES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
