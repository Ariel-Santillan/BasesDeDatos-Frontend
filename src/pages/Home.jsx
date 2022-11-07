import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded'

import ListItemContenido from "../atomos/ListItemContenido/ListItemContenido"

import ScrollBarCategoria from '../moleculas/ScrollBarCategoria/ScrollBarCategoria'

export default function Home() {
  return <>
    <ScrollBarCategoria />
    <ListItemContenido icono={<PictureAsPdfIcon></PictureAsPdfIcon>}
      nombreContenido={"Entendiendo la vida"}
      botonDeAccionContenido={<ArrowCircleDownRoundedIcon></ArrowCircleDownRoundedIcon>}></ListItemContenido>
  </>
}