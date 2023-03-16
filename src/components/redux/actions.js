export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_TO_FAVORITES = "REMOVE_TO_FAVORITES";
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

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
