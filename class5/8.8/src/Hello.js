import React from 'react'
import kkyu from '../assets/kkyu.jpg'
import css from './Hello.css'

console.log(css)

export default function Hello() {
  return (
    <div className={css.Hello}>
      <h1>
        Hello
        <img src={kkyu} />
      </h1>
    </div>
  )
}
