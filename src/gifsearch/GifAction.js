// https://github.com/erikras/ducks-modular-redux

// Action
const SEARCH = 'GifSearch/Search';

// Reducers
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SEARCH: {
    }
    default:
      return state;
  }
}

// Action Creator
export function search(query) {
  return {
    type: SEARCH,
    text: query
  };
}
