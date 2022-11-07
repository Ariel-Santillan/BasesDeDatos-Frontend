import ChipCategoria from "../../atomos/ChipCategoria/ChipCategoria"
import './ScrollBarCategoria.css'

import categorias from "../../categoriasMock"
import { Box } from '@mui/system'

function ScrollBarCategoria() {
    return <Box disableGutters sx={{ overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%' }}>
        {['Todos', ...categorias].map((categoria, index) =>
            <ChipCategoria
                key={index}
                texto={categoria} />
        )}
    </Box>
}

export default ScrollBarCategoria
