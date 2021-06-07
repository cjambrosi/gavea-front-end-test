import { Item } from './styles'

export function TableItem() {
  return (
    <Item className="item-table">
      <div className="flex-info">
        <img
          src="/assets/images/commodities/avatar01.png"
          alt="AgAmerica"
          className="image"
        />
        <span className="text">AgAmerica</span>
      </div>
      <div>
        <span className="text">Fev/21</span>
      </div>
      <div>
        <span className="text">2.000</span>
      </div>
      <div>
        <span className="text">164,50</span>
      </div>
    </Item>
  )
}
