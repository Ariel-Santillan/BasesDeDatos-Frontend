import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from 'react'
import { useFileUpload } from 'use-file-upload'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import DialogContentText from '@mui/material/DialogContentText'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { service } from '../service/Service'

export default function ModalSubirArchivo(props) {
  const [archivo, setArchivo] = useFileUpload()
  const [categoriasAMostrar, setCategoriasAMostrar] = useState([])
  const [categoriasContenido, setCategoriasContenido] = useState([])
  const error = categoriasContenido.length < 1

  useEffect(() => {
    if (!archivo) return
    console.log(archivo)
  }, [archivo])

  useEffect(() => {
    const fetchData = async () => {
      const categoriasBackend = await service.buscarCategorias()
      setCategoriasAMostrar(categoriasBackend.data.map((categoria) => ({ ...categoria, estaChecado: false })))
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  function cargarCategoria(categoria) {
    setCategoriasContenido([...categoriasContenido, categoria])
    console.log("categorias a guardar: ", categoriasContenido)
  }

  //aca se va a llamar al service con los datos que necesite
  const aceptarNuevoArchivo = async () => {
    try{
    const [nombre, extension] = archivo.name.split('.')
    console.log(nombre)
    console.log(extension)
    console.log(archivo.file)
    await service.subirArchivo(nombre, extension, archivo.file)
    props.close()
    window.location.reload()
    }catch{
      // eslint-disable-next-line no-alert
      alert('El titulo del archivo debe tener menos de 50 caracteres')
    }
    
  }

  return (
    <Dialog open={props.openNuevoArchivo}>
      <DialogTitle id="alert-dialog-title">{'Nuevo archivo'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Subir...
        </DialogContentText>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {archivo && <Typography>{archivo.name}</Typography>}
          <Button
            sx={{ marginLeft: 'auto' }}
            onClick={() =>
              setArchivo({
                accept: 'audio/*,video/*,.txt,.docx,.doc,.pdf,.gif',
              })
            }
          >
            <FileUploadIcon fontSize="large" />
          </Button>
        </Box>
        <Typography>¿A qu&eacute; categor&iacute;a pertenece?</Typography>
        <br/>
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          {categoriasAMostrar.map((categoria, index) => <FormControlLabel key={categoria.id}
            control={
              <Checkbox checked={categoria.estaChecado} onChange={() => cargarCategoria(categoria)} name={categoria.nombre} />
            }
            label={categoria.nombre}
          />)}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Cancelar</Button>
        <Button onClick={aceptarNuevoArchivo} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

ModalSubirArchivo.propTypes = {
  close: PropTypes.func,
  openNuevoArchivo: PropTypes.bool,
}
