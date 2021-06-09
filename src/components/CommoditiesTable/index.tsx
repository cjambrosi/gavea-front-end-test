import { TableItem } from '../TableItem'
import { Table, TableHead, TableBody } from './styles'

export function CommoditiesTable() {
  return (
    <Table>
      <TableHead>
        <p className="text">Part</p>
        <p className="text">Pag</p>
        <p className="text">Ton</p>
        <p className="text">R$</p>
      </TableHead>
      <TableBody>
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
      </TableBody>
    </Table>
  )
}
