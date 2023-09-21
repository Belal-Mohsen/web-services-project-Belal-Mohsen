import React from 'react'
import {BiLinkExternal} from 'react-icons/bi';

const MapUsingAddress = ({ address }) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
  return (
    <div>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      <BiLinkExternal/>
    </a>
    </div>
  )
}

export default MapUsingAddress