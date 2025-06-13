import { useNavigate } from 'react-router-dom'
import { Container, Image, Title, Price, Icon } from './styles'
import { Button } from '../Button'
import { FiPlus, FiMinus, FiHeart, FiEdit2 } from 'react-icons/fi'
import DishImg from '../../assets/Dish.png'
import { DishControls } from '../DishControls'

export function DishCard({ type = 'user', image, title, price }) {
  const isUser = type === 'user'
  const navigate = useNavigate()

  return (
    <Container $isUser={isUser} onClick={() => navigate('/dish')}>
      <Icon onClick={(e) => e.stopPropagation()}>
        {isUser ? <FiHeart size={20} /> : <FiEdit2 size={20} />}
      </Icon>

      <Image src={DishImg} alt={title} />
      <Title>{title} &gt;</Title>
      <Price>{price}</Price>

      {isUser && (
        <>
          <DishControls
                    quantity={1}
                    onIncrement={() => { }}
                    onDecrement={() => { }}
                />

          <Button
            title="incluir"
            $width="132px"
            $height="32px"
            $marginTop="4px"
            onClick={(e) => e.stopPropagation()}
          />
        </>
      )}
    </Container>
  )
}