import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Clientes from './Pages/Clientes'
import Header from './Components/Header'
import Fornecedor from './Pages/Fornecedor'
import Vendas from './Pages/Vendas'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Clientes" element={<Clientes/>} />
          <Route path="/Fornecedor" element={<Fornecedor/>} />
          <Route path="/Vendas" element={<Vendas/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
