const initialState = {
    joke: '',
    error: null,
};

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JOKE':
            return {
                ...state,
                joke: action.payload,
            };
        case 'FETCH_JOKE_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default jokeReducer;