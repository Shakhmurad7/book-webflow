interface RootState {
  user: string[]; // Assuming 'user' is an array of strings, adjust the type as needed
}

type RootAction = {
  type: string;
  payload: any; // Adjust the type as needed based on the actual payload
};

const initialState: RootState = {
  user: [],
};

function rootredux(state: RootState = initialState, action: RootAction): RootState {
  if (action.type === 'data') {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
}

export default rootredux;
