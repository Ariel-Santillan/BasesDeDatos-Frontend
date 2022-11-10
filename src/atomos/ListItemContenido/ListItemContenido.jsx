import PropTypes from 'prop-types'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
//import Box from '@mui/material/Box'
import { useState } from 'react'

import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { service } from './../../service/Service'
//import {contenido} from '../../dominio/Contenido'

import './ListItemContenido.css'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Input } from '@mui/material'
//import { ExpandCircleDownOutlined } from '@mui/icons-material'

const ListItemContenido = (props) => {
  const [openEliminar, setOpenEliminar] = useState(false)
  const [openEditar, setOpenEditar] = useState(false)
  const [nuevoTitulo, setNuevoTitulo] = useState(props.contenido.titulo)
  
  const eliminar = async () => {
    try {
      await service.eliminarContenido(props.contenido.idContenido)
    } catch (e) {
      generarError(e)
    }
    close()
  }

  const aceptarEdicion = async () => {
    try {
      await service.editarContenido(
        props.contenido.idContenido,
        props.contenido.titulo,
      )
        props.editar(props.contenido.idContenido,nuevoTitulo)
    } catch (e) {
      console.log(e)
    }
    close()
  }

  const clickOpenEliminar = () => {
    setOpenEliminar(true)
  }

  const close = () => {
    setOpenEliminar(false)
    setOpenEditar(false)
  }

  const clickOpenEditar = () => {
    setOpenEditar(true)
  }
//preguntar
  const cambiarTitulo = (event) => {
    setNuevoTitulo(event.target.value) 
    
  }

  return (
    <Grid item xs={3}>
      <Card className={'glass-background-item'}>
        <CardContent>
          <Grid container>
            <Grid item xs={8}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button size="small">
                <DownloadForOfflineRoundedIcon fontSize="large"></DownloadForOfflineRoundedIcon>
              </Button>
            </Grid>
          </Grid>
          <Typography variant="h5" component="div">
            {props.contenido.titulo}
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
          <div>
            <Button size="small" onClick={clickOpenEliminar}>
              <DeleteForeverOutlinedIcon fontSize="large"></DeleteForeverOutlinedIcon>
            </Button>
            <Dialog open={openEliminar}>
              <DialogTitle id="alert-dialog-title">{'Eliminar'}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  ¿Esta seguro que desea eliminar?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={close}>No</Button>
                <Button onClick={eliminar} autoFocus>
                  Si
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div>
            <Button size="small" onClick={clickOpenEditar}>
              <ModeOutlinedIcon fontSize="large"></ModeOutlinedIcon>
            </Button>
            <Dialog open={openEditar}>
              <DialogTitle id="alert-dialog-title">{'Editar'}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Nombre
                </DialogContentText>
                <Input
                  value={nuevoTitulo}
                  /*onChange={(event) => setNombre(event.target.value)}*/ onChange={
                    cambiarTitulo
                  }
                ></Input>
              </DialogContent>
              <DialogActions>
                <Button onClick={close}>Cancelar</Button>
                <Button onClick={aceptarEdicion} autoFocus>
                  Aceptar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
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
  botonDeAccionContenido: PropTypes.object,
  contenido: PropTypes.object,
  editar: PropTypes.func,
}

export default ListItemContenido
