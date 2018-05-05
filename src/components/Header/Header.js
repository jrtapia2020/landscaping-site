// @flow
import React from 'react'
import logo from './logo.svg'
import s from './Header.module.css'

const Header = () => (
  <header className={s.header}>
    <img src={logo} className={s.logo} alt={s.logo}/>
    <h1 className={s.title}>Welcome to Raul's Landscaping Site!</h1>
  </header>
)

export default Header