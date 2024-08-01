import axios from 'axios'
import { useState } from 'react'

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')

  axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
    setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
  })

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}
