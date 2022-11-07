import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import contenidos from '../../contenidosMock'

function TablaContenidos() {
    return <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="right">Extension</TableCell>
                    <TableCell align="right">Cantidad de visualizaciones</TableCell>
                    <TableCell align="right">Cantidad de descargas</TableCell>
                    <TableCell align="right">Categorias</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contenidos.map(contenido =>
                    <TableRow
                        key={contenido.nombre}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>
                            {contenido.nombre}
                        </TableCell>
                        <TableCell>{contenido.extension}</TableCell>
                        <TableCell align="right">{contenido.cantidadVisualizaciones}</TableCell>
                        <TableCell align="right">{contenido.cantidadDescargas}</TableCell>
                        <TableCell align="right">{contenido.categorías}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </TableContainer>
}

export default TablaContenidos