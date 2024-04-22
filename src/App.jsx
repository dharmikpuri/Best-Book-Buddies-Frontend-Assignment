import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@chakra-ui/react'
import Home from './Pages/Home'

function App() {
  return (
    <Box bg={"#FFF"}>
      <Home/>
    </Box>
  )
}

export default App
