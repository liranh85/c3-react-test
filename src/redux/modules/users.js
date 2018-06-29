import { API_ROOT } from '../../constants';
import { getArrayIndexById } from '../../util'

const LOAD_FAILED = '/users/LOAD_FAILED';
const LOAD_STARTED = '/users/LOAD_STARTED';
const LOAD_SUCCEEDED = '/users/LOAD_SUCCEEDED';
const USER_DELETED = '/users/USER_DELETED';

const initialState = {
  isLoading: false,
  items: [
    {
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 6,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
  ]
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
        items: [
          ...state.items,
          ...action.payload.filter(user => getArrayIndexById(state.items, user.id) === -1)
        ],
        isLoading: false
      }

    case USER_DELETED:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.id)
      }

    default:
      return state;
  }
};

export function load () {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_STARTED });
      const res = await fetch(`${API_ROOT}/users?page=1&per_page=10`);
      if (!res.ok) {
        dispatch({ type: LOAD_FAILED });
        return;
      }
      const data = await res.json();
      dispatch({ type: LOAD_SUCCEEDED, payload: data.data });
    } catch (error) {
      console.error(error);
    }
  }
}

export function deleteUser (id) {
  return { type: USER_DELETED, id }
}