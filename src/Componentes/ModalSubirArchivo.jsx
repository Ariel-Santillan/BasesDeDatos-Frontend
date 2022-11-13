import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect } from 'react'
import { useFileUpload } from 'use-file-upload'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import DialogContentText from '@mui/material/DialogContentText'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function ModalSubirArchivo(props) {
  const [archivo, setArchivo] = useFileUpload()

  useEffect(() => {
    if (!archivo) return
    console.log(archivo)
  }, [archivo])

  //aca se va a llamar al service con los datos que necesite
  const aceptarNuevoArchivo = () => {
    const [nombre, extension] = archivo.name.split('.')
    console.log(nombre)
    console.log(extension)
    console.log(archivo.file)
    //await service.subirArchivo(nombre,extension,archivo.file)
    props.close()
  }

  return (
    <Dialog open={props.openNuevoArchivo}>
      <DialogTitle id="alert-dialog-title">{'Nuevo archivo'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Subir
        </DialogContentText>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {archivo && <Typography>{archivo.name}</Typography>}
          <Button
          sx={{marginLeft:'auto'}}
            onClick={() =>
              setArchivo({
                accept: 'audio/*,video/*,.txt,.docx,.doc,.pdf,.gif',
              })
            }
          >
            <FileUploadIcon fontSize="large" />
          </Button>
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
