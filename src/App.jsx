import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import JokeList from './components/Jokelist'
import {fetchJokes} from './jokeActions';

function App() {
  const joke = useSelector(state => state.joke)
  const dispatch = useDispatch();

  const handleFetchJokes = () => {
    dispatch(fetchJokes())
  }

  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jokes">Jokes</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" render={() => <button onClick={handleFetchJoke}>Fetch Joke</button>} />
        <Route exact path="/jokes" render={() => <JokeList jokes={[joke]} />} />      </div>
    </Router>
    </>
  )
}

export default App
