import React from 'react'
export default function TracksList(props) {
  const tracks = props.tracks.map(t => (
    <li key={t.id}>
      <br /><img src={t.image} alt="No image available" width="150" height="150"/><br />
	  {t.artist}<br />
	  {t.album}<br />
	  {t.title}<br />
	  {t.year}<br />
	  {t.genre}<br />
	  {t.price}<br />
	  <span><img src="http://downloadicons.net/sites/default/files/cd-icon-8144.png" alt="cd" width="30" height="30" /><img src="https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/download.png" alt="download" width="30" height="30" /></span>
    </li>
  ))
  return <ul type="none">{tracks}</ul>
}