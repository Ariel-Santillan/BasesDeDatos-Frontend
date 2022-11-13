import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Reporte from './pages/Reporte'
import Header from './componentes/Header'
import { useState, useEffect } from 'react'
import categorias from './categoriasMock'
import {service} from './service/Service'

export const AppRoute = () => {
	const [contenidos, setContenidos] = useState([])
	const [categoriaActiva, setCategoriaActiva] = useState(0)
	const [textoBusqueda, setTextoBusqueda] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			const contenidosFiltrados = await service.getData(textoBusqueda,categorias[categoriaActiva])
			setContenidos(contenidosFiltrados)
		}
		try {
			fetchData()
		} catch (error) {
			console.log(error)
		}
	}, [textoBusqueda,categoriaActiva])

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
			<Header setContenidos={setContenidos} textoBusqueda={textoBusqueda}
					setTextoBusqueda={setTextoBusqueda}/>
			<Routes>
				<Route path="/" exact element={<Home
					editar={editar}
					eliminar={eliminar}
					contenidos={contenidos}
					categoriaActiva={categoriaActiva}
					setCategoriaActiva={setCategoriaActiva}
					
				/>} />
				<Route path="/reporte" exact element={<Reporte />} />
			</Routes>
		</>
	)

}


