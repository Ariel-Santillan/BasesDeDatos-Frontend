import ChipCategoria from "../../atomos/ChipCategoria/ChipCategoria"
import './ScrollBarCategoria.css'
import categorias from "../../categoriasMock"
import { Box } from '@mui/system'
import PropTypes from 'prop-types'

function ScrollBarCategoria(props) {

    return <Box sx={{ overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%' }}>
        {categorias.map((categoria, index) =>
            <ChipCategoria
                key={index}
                texto={categoria}
                index={index}
                setCategoriaActiva={props.setCategoriaActiva}
                estaClickeado={props.categoriaActiva === index}
                 />
        )}
    </Box>
}

ScrollBarCategoria.propTypes = {
	setCategoriaActiva: PropTypes.func,
    categoriaActiva: PropTypes.number,
}

export default ScrollBarCategoria
