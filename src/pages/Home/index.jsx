import { useState, useEffect } from 'react'
import { Container, Main, BannerWrapper } from './styles'
import { Banner } from '../../components/Banner'
import { DishSlider } from '../../components/DishSlider'
import { api } from '../../services/api'

export function Home() {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes`)
      setDishes(response.data)
    }

    fetchDishes()

    
  }, [])

  const meals = dishes.filter(dish => dish.category === 'Refeição');
  const deserts = dishes.filter(dish => dish.category === 'Sobremesa');
  const drinks = dishes.filter(dish => dish.category === 'Bebida');
  

  return (
    <Container>
      <Main>
        <BannerWrapper>
          <Banner />
        </BannerWrapper>

        <DishSlider title="Refeições" items={meals} />
        <DishSlider title="Sobremesas" items={deserts} />
        <DishSlider title="Bebidas" items={drinks} />
      </Main>
    </Container>
  )
}