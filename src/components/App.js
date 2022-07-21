// create your App component here
import React, { useState, useEffect } from 'react'

export default function App() {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const URL = "https://dog.ceo/api/breeds/image/random"
    fetch(URL)
      .then(r => r.json())
      .then(data => setImgSrc(data.message))
  }, [setImgSrc])

  if (imgSrc === null) {
    return <p>Loading...</p>
  }  

  return <img src={imgSrc} alt="A Random Dog" />
}