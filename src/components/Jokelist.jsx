import React from 'react';
import Joke from './Joke';

const Jokelist = ({jokes}) => {
    return (
        <div>
            {jokes.map((joke, index) => (
                <Joke key={index} joke={joke} />
            ))}
        </div>
    );
};

export default Jokelist;