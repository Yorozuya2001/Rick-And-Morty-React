import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from "./actions";

const initialState = {
  myFavorites: [],
};



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };
    case REMOVE_TO_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
