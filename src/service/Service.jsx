class Service {
  async eliminarContenido(idContenido) {
    console.log("borrado" + idContenido)
    // await axios.delete(`http://localhost:8080/contenido`+idContenido)
  }
  
}

export const service = new Service()