const contenidoMockeado = [
	{ idContenido: 0, titulo: 'cars', extension: 'PDF', fechaPublicacion: '11/02/22', url: '/contenidos/descarga.jpeg' },
	{ idContenido: 1, titulo: 'Coco', extension: 'DOCX', fechaPublicacion: '11/02/22', url: '/contenidos/ImagenPrueba.txt' },
	{ idContenido: 2, titulo: 'Casablanca', extension: 'MP4', fechaPublicacion: '11/02/22', url: '/contenidos/descarga.jpeg' }
]

class Service {
	async eliminarContenido(idContenido) {
		console.log("borrado " + idContenido)
		// await axios.delete(`http://localhost:8080/contenido/{idContenido}`+idContenido)
	}

	async editarContenido(idContenido, nombre) {
		console.log("editar " + idContenido + nombre)
		// return await axios.put(`http://localhost:8080/contenido/{idContenido}`.Contenido.toJson(idContenido,nombre))

	}

	async getData(textoBusqueda,categoria) {
		console.log("texto" + textoBusqueda + categoria)
		// const contenidosJson = await axios.get(`http://localhost:8080/contenido`)
		//return contenidosJson.data.map((contenido) => Contenido.fromJson(contenido))
		return contenidoMockeado.filter(contenido => contenido.titulo.toLowerCase().startsWith(textoBusqueda.toLowerCase()))
	}

	async subirArchivo(nombre, extension, archivo) {
		//return await axios.post(`http://localhost:9000/guardarElContenido`.Contenido.toJson(idContenido,nombre))

	}


}


export const service = new Service()
