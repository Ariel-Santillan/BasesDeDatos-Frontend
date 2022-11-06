import PropTypes from 'prop-types'

import Chip from '@mui/material/Chip'
import './Chip.css'


function ChipDescarga({texto}) {
    return <Chip
        label={texto}
        className='glass-background'
    />
}


ChipDescarga.propTypes = {
    texto: PropTypes.string
}

export default ChipDescarga