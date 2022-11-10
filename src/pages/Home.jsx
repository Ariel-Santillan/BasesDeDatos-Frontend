import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'


import ListItemContenido from "../atomos/ListItemContenido/ListItemContenido"
import ScrollBarCategoria from '../moleculas/ScrollBarCategoria/ScrollBarCategoria'

export default function Home() {
  return <>
    <ScrollBarCategoria />
    <Container sx={{paddingTop: '2%'}}>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) =>
        <ListItemContenido
          key={index}
          icono={<PictureAsPdfIcon></PictureAsPdfIcon>}
          //nombreContenido={item}
          nombreContenido={item.toString()}
          botonDeAccionContenido={<ArrowCircleDownRoundedIcon></ArrowCircleDownRoundedIcon>}
          idContenido={item}>
        </ListItemContenido>
        )}
      </Grid>
    </Container>
  </>
}