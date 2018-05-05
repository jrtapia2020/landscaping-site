// @flow
import React from 'react'
import {Header} from 'components'
import s from './App.module.css'

const AppView = () => (
  <div className={s.outerContainer}>
    <Header/>
    <p className={s.mainContent}>
      I will build an awesome Landscaping Website!
    </p>
  </div>
)

export default AppView
