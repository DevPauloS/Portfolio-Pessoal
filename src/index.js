import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'
import './styles/home.scss'
import './globals.scss'
import { SocialBtns } from './components/social-btns/social-btns'
import React from 'react'
import ReactDOM from 'react-dom'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Info />

      <div className="buttons">
        <div className="social">
          <SocialBtns />
        </div>
        <a className='btn-primary' href="mailto:paulinho-freitas@live.com">
          <p className='contact' color='--text-secondary'>CONTACT ME</p>
          <img className='icon-email' src="/assets/mail2.png" alt="Logo de Email" />
        </a>
      </div>

    </main >
  )
}

ReactDOM.render(<Home/>, document.getElementById('root'))
