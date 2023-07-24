import axios from 'axios';

export const fetchJokes = () => {
    return (dispatch) => {
        axios
            .get ('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                dispatch({type: 'FETCH_JOKE',payload: response.data.value });
                })
            .catch((error) => {
                dispatch ({type: 'FETCH_JOKE_ERROR', payload: error.message});
            });
    };
};

export default fetchJokes;