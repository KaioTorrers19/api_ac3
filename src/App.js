import React, { useState } from 'react'
import './App.css';
function App() {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const response = await fetch(`http://localhost:5000/cep/${cep}`)
    const data = await response.json()
    setAddress(data)
    setLoading(false)
  }

  return (
    <div>
      <h1>Busca de Endereço por CEP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cep}
          onChange={event => setCep(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Carregando...</p>}
      {Object.keys(address).length > 0 && (
        <div>
          <p>
            <strong>CEP:</strong> {address.cep}
          </p>
          <p>
            <strong>Logradouro:</strong> {address.logradouro}
          </p>
          <p>
            <strong>Bairro:</strong> {address.bairro}
          </p>
          <p>
            <strong>Cidade:</strong> {address.localidade}
          </p>
          <p>
            <strong>Estado:</strong> {address.uf}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
