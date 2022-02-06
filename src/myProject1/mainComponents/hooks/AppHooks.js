
import React, { useState, createContext } from 'react'
import Header from './header/header'
import Middle from './middle/middle'
import Footer from './footer/footer'

import { Container } from 'react-bootstrap'

export const Ctx = createContext()

export default function App() {
   const [dark, setDark] = useState(0)
   return (
      <Container className='p-0' >
         <Ctx.Provider value={[dark, setDark]}>
            <Header />
            <Middle />
            <Footer/>
         </Ctx.Provider>
      </Container>
   )
}