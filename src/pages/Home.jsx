import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import PropTypes from 'prop-types'
import ListItemContenido from "../atomos/ListItemContenido/ListItemContenido"
import ScrollBarCategoria from '../moleculas/ScrollBarCategoria/ScrollBarCategoria'


export default function Home(props) {

  return <>
    <ScrollBarCategoria />
    <Container sx={{paddingTop: '2%'}}>
      <Grid container spacing={2}>
        {props.contenidos.map((contenido, index) =>
        <ListItemContenido
          key={index}
          botonDeAccionContenido={<ArrowCircleDownRoundedIcon fontSize='large'/>}
          contenido={contenido}
          editar={props.editar}
					eliminar={props.eliminar}
          >
        </ListItemContenido>
        )}
      </Grid>
    </Container>
  </>
}

Home.propTypes = {
	contenidos: PropTypes.array,
	editar: PropTypes.func,
	eliminar: PropTypes.func,
}
