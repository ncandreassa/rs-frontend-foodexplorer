import { Container, Main, BannerWrapper } from './styles'
import { Banner } from '../../components/Banner'
import { DishSlider } from '../../components/DishSlider'

export function Home() {
  const sampleDishes = [
    { id: 1, image: '/salada.png', title: 'Salada Ravanello', price: 'R$ 49,97' },
    { id: 2, image: '/salada.png', title: 'Salada Ravanello', price: 'R$ 49,97' },
    { id: 3, image: '/salada.png', title: 'Salada Ravanello', price: 'R$ 49,97' },
    { id: 4, image: '/salada.png', title: 'Salada Ravanello', price: 'R$ 49,97' },
    { id: 5, image: '/salada.png', title: 'Salada Ravanello', price: 'R$ 49,97' },
    { id: 6, image: '/salada.png', title: 'Salada Ravanello', price: 'R$ 49,97' },
  ]

  return (
    <Container>
      <Main>
        <BannerWrapper>
          <Banner />
        </BannerWrapper>

        <DishSlider title="Refeições" items={sampleDishes} />
        <DishSlider title="Sobremesas" items={sampleDishes} />
        <DishSlider title="Bebidas" items={sampleDishes} />
      </Main>
    </Container>
  )
}