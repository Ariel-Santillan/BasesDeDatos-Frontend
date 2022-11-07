import { useState } from 'react'
import PropTypes from 'prop-types'

import Chip from '@mui/material/Chip'
import './Chip.css'


function ChipDescarga({texto}) {
    const [estaClickeado, setEstaClickeado] = useState(false)

    return <Chip
        label={texto}
        className={estaClickeado ? 'glass-background-esta-clickeado' : 'glass-background'}
        onClick={() => setEstaClickeado(!estaClickeado)}
    />
}


ChipDescarga.propTypes = {
    texto: PropTypes.string
}

export default ChipDescarga