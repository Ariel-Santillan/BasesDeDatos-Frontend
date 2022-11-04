import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded'

export default function ItemContenido() {
  return (
    <Container>
      <List>
        <ListItem>
            <PictureAsPdfIcon/>
          <Typography>News</Typography>
          <ArrowCircleDownRoundedIcon/>
        </ListItem>
      </List>
    </Container>
  )
}
