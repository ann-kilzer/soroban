import { useState } from 'react'
import Bead from './Bead'
import './CountingBead.css'

export default function CountingBead() {
  const [up, setUp] = useState(false)

  const handleClick = () => {
    setUp(!up); 
  }

  return (
    <Bead className={up? "BeadUp": "BeadDown"} onClick={handleClick}/>
  )
}