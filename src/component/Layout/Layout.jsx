import React from 'react'
import { Router } from '../../routes'
import { Header } from '../Header/Header'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Router/>
    </div>
  )
}
