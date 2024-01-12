import React from 'react'

const SpotifyWidget = () => {
  return (
    <iframe
    title="Spotify Embed: Recommendation Playlist "
    src={`https://open.spotify.com/embed/playlist/1lCASH01EdJXuXy10CJA2f?si=6c68b5a2972e47de?utm_source=generator&theme=0`}
    style={{ minHeight: '200px', marginTop: '3.125rem', width: '50%', height: '100%'}}
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
  )
}

export default SpotifyWidget
