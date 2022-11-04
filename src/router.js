import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import ABM from './pages/ABM'
//import Header from './componentes/header/header'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" exact element={<Home />} />
      <Route path="/abm" exact element={<ABM />} />
    </>,
  ),
)
