import { API_ROOT } from '../../constants';

const LOAD_FAILED = '/users/LOAD_FAILED';
const LOAD_STARTED = '/users/LOAD_STARTED';
const LOAD_SUCCEEDED = '/users/LOAD_SUCCEEDED';

const initialState = {
  isLoading: false,
  items: []
};

export default function users (state = initialState, action) {
  switch (action.type) {
    case LOAD_FAILED:
      return {
        ...state,
        isLoading: false
      }

    case LOAD_STARTED:
      return {
        ...state,
        isLoading: true
      }

    case LOAD_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      }

    default:
      return state;
  }
};

export function load () {
  console.log('Loading users');
  return async dispatch => {
    try {
      dispatch({ type: LOAD_STARTED });
      const res = await fetch(`${API_ROOT}/users?page=1&per_page=10`);
      if (!res.ok) {
        dispatch({ type: LOAD_FAILED });
        return;
      }
      const users = await res.json();
      dispatch({ type: LOAD_SUCCEEDED, payload: users });
    } catch (error) {
      console.error(error);
    }
  }
}
