import Link from '@mui/material/Link'
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

export const BotonDescarga = (props) => {

    const estaLogueado = true
      
  return (
    <Link sx={{pointerEvents:estaLogueado ? 'auto' : 'none'}}
      // href={`localhost:8080/contenidos/${props.contenido.idContenido}`}
      href={`${props.contenido.url}`}
      download
    >
      <Button size="small" disabled={!estaLogueado}>
        <DownloadForOfflineRoundedIcon sx={{color:estaLogueado ? '#0C6FF6' : 'grey'}} />
      </Button>
    </Link>
  )
}

BotonDescarga.propTypes = {
  contenido: PropTypes.object,
}
