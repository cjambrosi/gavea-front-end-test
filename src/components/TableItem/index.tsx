import { Item } from './styles'

interface TableItemProps {
  part: string
  pag: string
  ton: string
  value: string
  operation: string
  imageName: string
}

export function TableItem({
  part,
  pag,
  ton,
  value,
  operation,
  imageName
}: TableItemProps) {
  return (
    <Item className="item-table" operation={operation}>
      <div className="flex-info">
        <img
          src={`/assets/images/commodities/${imageName}.png`}
          alt={part}
          className="image"
        />
        <span className="text">{part}</span>
      </div>
      <div>
        <span className="text">{pag}</span>
      </div>
      <div>
        <span className="text">{ton}</span>
      </div>
      <div>
        <span className="text operation">{value}</span>
      </div>
    </Item>
  )
}
