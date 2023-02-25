import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.style.scss'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='container'>
    <nav className='nav'>
    <ul className="nav__list" >
      <Link to='home'className='nav__list-item'>Home</Link>
      <Link to='counter' className='nav__list-item'>Counter</Link>
      <Link to='modal'className='nav__list-item'>Modal window</Link>
      <Link to='quiz'className='nav__list-item'>Quiz</Link>
      <Link to='users'className='nav__list-item'>Users</Link>
      <Link to='photos'className='nav__list-item'>Photos</Link>
    </ul>

  </nav></div>
  )
}
