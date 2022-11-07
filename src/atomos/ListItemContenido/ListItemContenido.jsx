import PropTypes from 'prop-types'

import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

import './ListItemContenido.css'

function ListItemContenido({ icono, nombreContenido, botonDeAccionContenido }) {
  return (
    <ListItem 
    sx={{width: '90%', display: 'flex', justifyContent: 'space-between'}}
    className='glass-background-item'
    >
      {icono}
      <Typography>{nombreContenido}</Typography>
      {botonDeAccionContenido}
    </ListItem>
  )
}

ListItemContenido.propTypes = {
  icono: PropTypes.object,
  nombreContenido: PropTypes.string,
  botonDeAccionContenido: PropTypes.object
}

export default ListItemContenido
