import {
  ADD_TO_FAVORITES,
  FILTER,
  ORDER,
  REMOVE_TO_FAVORITES,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  const { allCharacters } = state;
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_TO_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: [...allCharacters],
        };
      } else {
        return {
          ...state,
          myFavorites: allCharacters.filter(
            (character) => character.gender === action.payload
          ),
        };
      }

    case ORDER:
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }),
        };
      } else if (action.payload === "Descendente") {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          }),
        };
      }
      break;

    default:
      return { ...state };
  }
};

export default rootReducer;
