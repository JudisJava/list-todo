import React from 'react'
import { Listtask } from './Listtask'
import { Formtask } from './Formtask'

import Logo from '../assets/Logo.svg'
import PlusSvg from '../assets/plus.svg'

import '../scss/import.scss'


function App() {

  return (
    <>
      <header className='logotitle'>
        <div className='logo'>
          <img src={Logo} />
        </div>
      </header>
      <body>
        <Formtask />
      </body>
    </>
  )
}

export default App;
