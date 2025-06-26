import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Container, Image, Title, Price, Icon, Description, BottomContent } from './styles'
import { Button } from '../Button'
import { FiHeart, FiEdit2 } from 'react-icons/fi'
import DishPlaceholder from '../../assets/DishPlaceholder.png'
import { DishControls } from '../DishControls'
import { useAuth } from '../../hooks/auth';
import { useOrders } from '../../hooks/orders';
import { api } from '../../services/api'


export function DishCard({ dish }) {
  const { user } = useAuth();
  const navigate = useNavigate()

  const isDesktop = useMediaQuery({ minWidth: 768 })

  const isUser = user && user.role === 'user'

  const { getOrder, addOrUpdateOrder } = useOrders();

  const [quantity, setQuantity] = useState(1);

  function handleIconClick(e) {
    e.stopPropagation()
    if (!isUser) {
      navigate(`/dish-form/edit/${dish.id}`)
    }
  }

  useEffect(() => {
    const order = getOrder(dish.id);
    setQuantity(order ? order.quantity : 1);
  }, [getOrder, dish.id]);

  const handleIncrement = (e) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();

    const item = {
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      quantity
    };

    addOrUpdateOrder(item);
  };

  const isInCart = !!getOrder(dish.id);
  const isZero = quantity === 0;

  const buttonLabel = isZero ? "remover" : isInCart ? "atualizar" : "incluir";

  return (
    <Container $isUser={isUser} $isInCart={isInCart} onClick={() => navigate(`/dish/${dish.id}`)}>
      <Icon onClick={handleIconClick}>
        {isUser ? <FiHeart size={20} /> : <FiEdit2 size={20} />}
      </Icon>

      <Image src={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : DishPlaceholder} alt={dish.name} />
      <Title>{dish.name} &gt;</Title>

      <Description>
        {dish.description}
      </Description>

      <Price>{dish.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}</Price>

      {isUser && (
        <BottomContent>
          <DishControls
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            fontSize={isDesktop ? '2rem' : undefined}
            iconSize={isDesktop ? '2.4rem' : undefined}
          />

          <Button
            title={buttonLabel}
            width={isDesktop ? '9.2rem' : '13.2rem'}
            height={isDesktop ? '4.8rem' : '3.2rem'}
            marginTop="0"
            onClick={handleButtonClick}
          />
        </BottomContent>
      )}
    </Container>
  )
}