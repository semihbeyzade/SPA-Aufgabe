import React from 'react'
import Header from './Header'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Container() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`app ${theme}`} >
     <Header />
    </div>
  )
}

export default Container