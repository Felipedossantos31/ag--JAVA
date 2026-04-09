import { useState } from 'react'
import './App.css'

import ap1 from './assets/ap1.jpg'
import ap2 from './assets/ap2.jpg'
import ap3 from './assets/ap3.jpg'
import logo from './assets/logo-mrv.png'

function App() {

  const aps = [
    { nome: "Parque das Flores", img: ap1, construindo: true },
    { nome: "Vista Verde", img: ap2, construindo: false },
    { nome: "Solar das Aguas", img: ap3, construindo: true }
  ]


  
  const [ap, setAp] = useState(aps[0])

  return (
    <main>
      <section>
      
      <div className='cabecalho'>
        <img id='logo-mrv' src={logo} alt="" />
      </div>
      
      <p>Encontre seu apartamento</p>

      <div className="thumb">
          <img src={ap.img} />
      </div>

      <input value={ap.nome} disabled />

      <div className="status" >
          <p>Status do Ap</p>

          <span>
            {ap.construindo ? "Construindo "  : "Pronto " }

          </span>
      </div>
        
      <button onClick={() => setAp(aps[0])}>Apartamento 90m² </button>
      <button onClick={() => setAp(aps[1])}>Apartamento 100m² </button>
      <button onClick={() => setAp(aps[2])}>Apartamento 50m²</button>

      </section>
    </main>
  )
}

export default App