import { useEffect, useState } from 'react'
import { db } from '../../libs/firebase'

import { TableItem } from '../TableItem'
import { Table, TableHead, TableBody } from './styles'

export function CommoditiesTable() {
  const [commodities, setCommodities] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection('commodities').get()
      setCommodities(snapshot.docs.map((doc) => doc.data()))
    }

    fetchData()
  }, [])

  return (
    <Table>
      <TableHead>
        <p className="text">Part</p>
        <p className="text">Pag</p>
        <p className="text">Ton</p>
        <p className="text">R$</p>
      </TableHead>
      <TableBody>
        {commodities.map(
          ({ part, pag, ton, value, operation, imageName }, index) => (
            <TableItem
              key={index}
              part={part}
              pag={pag}
              ton={ton}
              value={value}
              operation={operation}
              imageName={imageName}
            />
          )
        )}
      </TableBody>
    </Table>
  )
}
