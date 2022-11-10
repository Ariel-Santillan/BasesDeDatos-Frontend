import PropTypes from 'prop-types'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useState } from 'react'

import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { service } from './../../service/Service'

import './ListItemContenido.css'
import { ExpandCircleDownOutlined } from '@mui/icons-material'

const ListItemContenido = (props) => {

  const [contenido, setContenido] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const eliminar = async () => {
    try {
      console.log(props)
      console.log(props.idContenido)
      console.log("eliminar")
      await service.eliminarContenido(props.idContenido)
      console.log("eliminar2")

    }catch(e){
    generarError(e)
    }
  }

  const generarError = (error) => {
    console.log(error)
  }
  return (
    <Grid item xs={3}>
      <Card className={'glass-background-item'}>
        <CardContent>
          <Grid container>
            <Grid item xs={8}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button size="small">
                <DownloadForOfflineRoundedIcon fontSize='large'></DownloadForOfflineRoundedIcon>
              </Button>
            </Grid>
          </Grid>
          <Typography variant="h5" component="div">
            hola
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={eliminar}>
            <DeleteForeverOutlinedIcon fontSize='large'></DeleteForeverOutlinedIcon>
          </Button>
          <Button size="small">
            <ModeOutlinedIcon fontSize='large'></ModeOutlinedIcon>
          </Button>
        </CardActions>
      </Card>
    </Grid>

    // <ListItem 
    // sx={{width: '90%', display: 'flex', justifyContent: 'space-between'}}
    // className='glass-background-item'
    // >
    //   {icono}
    //   <Typography>{nombreContenido}</Typography>
    //   {botonDeAccionContenido}
    // </ListItem>
  )
}

ListItemContenido.propTypes = {
  icono: PropTypes.object,
  nombreContenido: PropTypes.string,
  botonDeAccionContenido: PropTypes.object,
  idContenido: PropTypes.number
}

export default ListItemContenido
