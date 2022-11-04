import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ABM from './pages/ABM'
import Header from './Componentes/Header'

export const AppRoute = () => 
  <>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/abm" exact element={<ABM />} />
    </Routes>
  </>

