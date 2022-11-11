class Service {
  async eliminarContenido(idContenido) {
    console.log("borrado " + idContenido)
    // await axios.delete(`http://localhost:8080/contenido/{idContenido}`+idContenido)
  }

  async editarContenido(idContenido, nombre) {
    console.log("editar " + idContenido + nombre)
    // return await axios.put(`http://localhost:8080/contenido/{idContenido}`.Contenido.toJson(idContenido,nombre))

  }

  async traerContenido() {
    console.log("traerContenido ")
    // const contenidosJson = await axios.get(`http://localhost:8080/contenido`)
    //return contenidosJson.data.map((contenido) => Contenido.fromJson(contenido))
    return [
      { idContenido: 0, titulo: 'cars', extension: 'PDF', fechaPublicacion: '11/02/22' },
      { idContenido: 1, titulo: 'Coco', extension: 'DOCX', fechaPublicacion: '11/02/22' },
      { idContenido: 2, titulo: 'Casablanca', extension: 'MP3', fechaPublicacion: '11/02/22'}
    ]
  }

  async getData(textoBusqueda) {
    console.log("texto" + textoBusqueda)
    // const contenidosJson = await axios.get(`http://localhost:8080/contenido`)
    //return contenidosJson.data.map((contenido) => Contenido.fromJson(contenido))
    return [{ idContenido: 0, titulo: 'cars' }, { idContenido: 1, titulo: 'Coco' }, { idContenido: 2, titulo: 'Casablanca' }]
  }
}


export const service = new Service()