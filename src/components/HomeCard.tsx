import { useState } from 'react'
import Card from '@mui/material/Card'
import './HomeCard.css'
import CountingBead from './CountingBead'

export default function HomeCard() {
  const [count, setCount] = useState(0)

  return (
    <Card sx={{height: '800px'}}>
      <CountingBead ></CountingBead>
    </Card>
  )
}
