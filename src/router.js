import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Reporte from './pages/Reporte'
import Header from './componentes/Header'

export const AppRoute = () => {

  
  return(
    <>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/reporte" exact element={<Reporte />} />
    </Routes>
  </>
  )
  
}
  

