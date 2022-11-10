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
  const [nombre, setNombre] = useState('')
  //const [contenido, setContenido] = useState([])
  //const [errorMessage, setErrorMessage] = useState('')

  const eliminar = async () => {
    try {
      await service.eliminarContenido(props.idContenido)
    } catch (e) {
      generarError(e)
    }
    close()
  }

  const editar = async () => {
    try {
      await service.editarContenido(props.idContenido)
    } catch (e) {
      generarError(e)
    }
    close()
  }

  const generarError = (error) => {
    console.log(error)
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
          <div>
            <Button size="small" /*onClick={eliminar}*/ onClick={clickOpenEliminar}>
              <DeleteForeverOutlinedIcon fontSize="large"></DeleteForeverOutlinedIcon>
            </Button>
            <Dialog 
            open={openEliminar}
            >
              
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
          <Button size="small" /*onClick={editar}*/ onClick={clickOpenEditar}>
            <ModeOutlinedIcon fontSize="large"></ModeOutlinedIcon>
          </Button>
          <Dialog 
            open={openEditar}
            >
              
              <DialogTitle id="alert-dialog-title">{'Editar'}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Nombre
                </DialogContentText>
                <Input value={nombre} onChange={(event) => setNombre(event.target.value)}>
                </Input>
              </DialogContent>
              <DialogActions>
                <Button onClick={close}>Cancelar</Button>
                <Button onClick={editar} autoFocus>
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
  nombreContenido: PropTypes.string,
  botonDeAccionContenido: PropTypes.object,
  idContenido: PropTypes.number,
}

export default ListItemContenido
