import { Container, Image, Title, Price, Controls, Quantity, Icon } from './styles'
import { Button } from '../Button'
import { FiPlus, FiMinus, FiHeart, FiEdit2 } from 'react-icons/fi'
import DishImg from '../../assets/Dish.png'

export function DishCard({ type = 'user', image, title, price }) {
    const isUser = type === 'user'
  
    return (
      <Container $isUser={isUser}>
        <Icon>
          {isUser ? <FiHeart size={20} /> : <FiEdit2 size={20} />}
        </Icon>
  
        <Image src={DishImg} alt={title} />
        <Title>{title} &gt;</Title>
        <Price>{price}</Price>
  
        {isUser && (
          <>
            <Controls>
              <button><FiMinus size={20} /></button>
              <Quantity>01</Quantity>
              <button><FiPlus size={20} /></button>
            </Controls>
  
            <Button
              title="incluir"
              $width="132px"
              $height="32px"
              $marginTop="4px"
            />
          </>
        )}
      </Container>
    )
  }