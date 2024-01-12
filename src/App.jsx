import React from 'react'
import GoogleSearchBar from './Components/GoogleSearchBar'
import SpotifyWidget from './Components/SpotifyWidget'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div className='main'>
      <Nav />
      <GoogleSearchBar />
      <div className="spotifyContainer">
        <SpotifyWidget />
      </div>
    </div>
  )
}

export default App