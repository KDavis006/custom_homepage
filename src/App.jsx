import React from 'react'
import GoogleSearchBar from './Components/GoogleSearchBar'
import SpotifyWidget from './Components/SpotifyWidget'
import Nav from './Components/Nav'
import TodoList from './Components/ToDoList'

const App = () => {
  return (
    <div className='main'>
      <Nav />
      <GoogleSearchBar />
      <div className="spotifyContainer">
        <SpotifyWidget />
      </div>
      <TodoList />
    </div>
  )
}

export default App