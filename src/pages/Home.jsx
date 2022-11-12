import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ListItemContenido from "../atomos/ListItemContenido/ListItemContenido"
import ScrollBarCategoria from '../moleculas/ScrollBarCategoria/ScrollBarCategoria'
import { useEffect, useState } from 'react'
import { service } from '../service/Service'


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

  const editar = async (idContenido, nuevoTitulo) => {
    const contenidosEditados = contenidos.map((contenido) =>
      contenido.idContenido === idContenido
        ? { ...contenido, titulo: nuevoTitulo }
        : contenido,
    )
    setContenidos(contenidosEditados)
  }

  const eliminar = async (idContenido) => {
    const eliminarContenido = contenidos.filter(
      (contenido) => contenido.idContenido !== idContenido,
    )
    setContenidos(eliminarContenido)
  }

  return (
    <>
      <ScrollBarCategoria />
      <Container sx={{ paddingTop: '2%' }}>
      <Box sx={{display: 'flex', justifyContent:'flex-end' }} >
          <Button background-color = 'black'
        >
            Agregar archivo
          </Button>
        </Box>
        <Grid container spacing={2}>
          {contenidos.map((contenido, index) => 
            <ListItemContenido
              key={index}
              botonDeAccionContenido={<ArrowCircleDownRoundedIcon fontSize='large'></ArrowCircleDownRoundedIcon>}
              contenido={contenido}
              editar={editar}
              eliminar={eliminar}
            ></ListItemContenido>
          )}
        </Grid>
      </Container>
    </>
  )
}

