import { useEffect } from 'react'
import { Container, Main, BannerWrapper } from './styles'
import { Banner } from '../../components/Banner'
import { DishSlider } from '../../components/DishSlider'
import { useDishes } from '../../hooks/dishes';

export function Home() {

  const { dishes, fetchDishes, query } = useDishes();

  useEffect(() => {
    if (query.length > 0)
      return
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
        {meals.length > 0 && <DishSlider title="Refeições" items={meals} />}
        {deserts.length > 0 && <DishSlider title="Sobremesas" items={deserts} />}
        {drinks.length > 0 && <DishSlider title="Bebidas" items={drinks} />}
      </Main>
    </Container>
  )
}