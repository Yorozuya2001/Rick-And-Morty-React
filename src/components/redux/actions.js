export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_TO_FAVORITES = "REMOVE_TO_FAVORITES";

export const addToFavorites = (character) => {
  return { type: ADD_TO_FAVORITES, payload: character };
};

export const removeToFavorites = (id) => {
  return {
    type: REMOVE_TO_FAVORITES,
    payload: id,
  };
};
