import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'


import ListItemContenido from "../atomos/ListItemContenido/ListItemContenido"
import ScrollBarCategoria from '../moleculas/ScrollBarCategoria/ScrollBarCategoria'
import { useEffect, useState } from 'react'
import {service} from '../service/Service'

export default function Home() {

  const [contenidos, setContenidos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const contenidos = await service.traerContenido()
      setContenidos(contenidos)
    }
  
    try {
      console.log('cualquier cosa no importa')
      fetchData() 
    } catch (error) {
      console.log(error)
    }
  }, [])

  const editar = async (idContenido,nuevoTitulo) => {
    const contenidosEditados = contenidos.map(contenido => contenido.idContenido === idContenido ? {...contenido,titulo:nuevoTitulo}:contenido)
    setContenidos(contenidosEditados)
  }

  return <>
    <ScrollBarCategoria />
    <Container sx={{paddingTop: '2%'}}>
      <Grid container spacing={2}>
        {contenidos.map((contenido, index) =>
        <ListItemContenido
          key={index}
          icono={<PictureAsPdfIcon></PictureAsPdfIcon>}
          botonDeAccionContenido={<ArrowCircleDownRoundedIcon></ArrowCircleDownRoundedIcon>}
          contenido={contenido}
          editar={editar}>
        </ListItemContenido>
        )}
      </Grid>
    </Container>
  </>
}