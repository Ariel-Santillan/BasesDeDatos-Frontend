export class Contenido {
  constructor() {
    this.idContenido = 0
    this.titulo = ''
    this.extension=''
    this.fechaPublicacion=''
    this.categoria=''
  }

  static fromJson(contenido) {
    return Object.assign(
      new Contenido(),
      contenido,
      {}
    )
  }

  static toJson(idContenido, nombre) {
    return {
      idContenido: idContenido,
      nombre: nombre
    }
  }

  //const contiene(texto) => {
  // const textoMinuscula = texto.toLowerCase()
  // return titulo.toLowerCase().includes(textoMinuscula) || this.texto.toLowerCase().includes(textoMinuscula)
  //}
}

export default Contenido