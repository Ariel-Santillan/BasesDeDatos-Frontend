import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Reporte from './pages/Reporte'
import Header from './Componentes/Header'
import { useState } from 'react'

export const AppRoute = () => {
	const [contenidos, setContenidos] = useState([])

	const editar = async (idContenido, nuevoTitulo) => {
		const contenidosEditados = contenidos.map(contenido => contenido.idContenido === idContenido ? { ...contenido, titulo: nuevoTitulo } : contenido)
		setContenidos(contenidosEditados)
	}

	const eliminar = async (idContenido) => {
		const contenidosNuevos = contenidos.filter(contenido => contenido.idContenido !== idContenido)
		setContenidos(contenidosNuevos)
	}

	return (
		<>
			<Header setContenidos={setContenidos} />
			<Routes>
				<Route path="/" exact element={<Home
					editar={editar}
					eliminar={eliminar}
					contenidos={contenidos}
				/>} />
				<Route path="/reporte" exact element={<Reporte />} />
			</Routes>
		</>
	)

}


