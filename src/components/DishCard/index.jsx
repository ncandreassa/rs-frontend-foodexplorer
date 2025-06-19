import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Container, Image, Title, Price, Icon, Description, BottomContent } from './styles'
import { Button } from '../Button'
import { FiPlus, FiMinus, FiHeart, FiEdit2 } from 'react-icons/fi'
import DishImg from '../../assets/Dish.png'
import { DishControls } from '../DishControls'
import { useAuth } from '../../hooks/auth';


export function DishCard({ image, title, price }) {
  const { user } = useAuth();
  const navigate = useNavigate()

  const isDesktop = useMediaQuery({ minWidth: 768 })

  const isUser = user.role === 'user'

  function handleIconClick(e) {
    e.stopPropagation()
    if (!isUser) {
      navigate('/dish-form/edit')
    }
  }

  return (
    <Container $isUser={isUser} onClick={() => navigate('/dish')}>
      <Icon onClick={handleIconClick}>
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
            fontSize={isDesktop ? '0.2rem' : undefined}
            iconSize={isDesktop ? '2.4rem' : undefined}
          />

          <Button
            title="incluir"
            width={isDesktop ? '9.2rem' : '13.2rem'}
            height={isDesktop ? '4.8rem' : '3.2rem'}
            marginTop="0"
            onClick={(e) => e.stopPropagation()}
          />
        </BottomContent>
      )}
    </Container>
  )
}