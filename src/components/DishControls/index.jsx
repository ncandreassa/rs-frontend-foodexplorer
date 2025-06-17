import { Container } from './styles'
import { FiPlus, FiMinus } from 'react-icons/fi'

export function DishControls({
  quantity = 1,
  onIncrement,
  onDecrement,
  fontSize = '1.6rem',
  fontWeight = '400',
  iconSize = 18
}) {
  return (
    <Container fontSize={fontSize} fontWeight={fontWeight}>
      <div className="quantity">
        <button onClick={onDecrement}><FiMinus size={iconSize} /></button>
        <span>{String(quantity).padStart(2, '0')}</span>
        <button onClick={onIncrement}><FiPlus size={iconSize} /></button>
      </div>
    </Container>
  )
}