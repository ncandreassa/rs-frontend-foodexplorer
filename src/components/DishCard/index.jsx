import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Container, Image, Title, Price, Icon, Description, BottomContent } from './styles'
import { Button } from '../Button'
import { FiPlus, FiMinus, FiHeart, FiEdit2 } from 'react-icons/fi'
import DishImg from '../../assets/Dish.png'
import { DishControls } from '../DishControls'

export function DishCard({ type = 'user', image, title, price }) {
  const isUser = type === 'user'
  const navigate = useNavigate()
  const isDesktop = useMediaQuery({ minWidth: 768 })
  

  return (
    <Container $isUser={isUser} onClick={() => navigate('/dish')}>
      <Icon onClick={(e) => e.stopPropagation()}>
        {isUser ? <FiHeart size={20} /> : <FiEdit2 size={20} />}
      </Icon>

      <Image src={DishImg} alt={title} />
      <Title>{title} &gt;</Title>

      <Description>
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
      </Description>

      <Price>{price}</Price>

      {isUser && (
        <BottomContent>
          <DishControls
            quantity={1}
            onIncrement={() => { }}
            onDecrement={() => { }}
            fontSize={isDesktop ? '20px' : undefined}
            iconSize={isDesktop ? '24px' : undefined}
          />

          <Button
            title="incluir"
            $width={isDesktop ? '92px' : '132px'}
            $height={isDesktop ? '48px' : '32px'}
            $marginTop="0"
            onClick={(e) => e.stopPropagation()}
          />
        </BottomContent>
      )}
    </Container>
  )
}