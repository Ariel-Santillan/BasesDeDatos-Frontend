import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded'

import ChipDescarga from "../atomos/Chip/ChipDescarga"
import ListItemContenido from "../atomos/ListItemContenido/ListItemContenido"

export default function Home() {
  return <>
    <ChipDescarga texto={'Deportes'}></ChipDescarga>
    <ListItemContenido icono={<PictureAsPdfIcon></PictureAsPdfIcon>} 
    nombreContenido={"Entendiendo la vida"} 
    botonDeAccionContenido={<ArrowCircleDownRoundedIcon></ArrowCircleDownRoundedIcon>}></ListItemContenido>
  </>
}