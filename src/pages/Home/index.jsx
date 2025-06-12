import {
    Container,
    Main,
    Slider,
    CategoryWrapper,
    BannerWrapper
  } from './styles'
  
  import { Banner } from '../../components/Banner'
  import { DishCard } from '../../components/DishCard'
  import { useKeenSlider } from 'keen-slider/react'
  
  export function Home() {
    const [sliderRef] = useKeenSlider({
      mode: 'snap',
      slides: { perView: 'auto', spacing: 16 }
    })
  
    return (
      <Container>
        <Main>
          <BannerWrapper>
            <Banner />
          </BannerWrapper>
  
          <CategoryWrapper>
            <h1>Refeições</h1>
            <Slider ref={sliderRef} className="keen-slider">
              {[1, 2, 3].map(idx => (
                <div key={idx} className="keen-slider__slide">
                  <DishCard
                    type="user"
                    image="/salada.png"
                    title="Salada Ravanello"
                    price="R$ 49,97"
                  />
                </div>
              ))}
            </Slider>
          </CategoryWrapper>

          <CategoryWrapper>
            <h1>Pratos Principais</h1>
            <Slider ref={sliderRef} className="keen-slider">
              {[1, 2, 3].map(idx => (
                <div key={idx} className="keen-slider__slide">
                  <DishCard
                    type="user"
                    image="/salada.png"
                    title="Salada Ravanello"
                    price="R$ 49,97"
                  />
                </div>
              ))}
            </Slider>
          </CategoryWrapper>

          <CategoryWrapper>
            <h1>Bebidas</h1>
            <Slider ref={sliderRef} className="keen-slider">
              {[1, 2, 3].map(idx => (
                <div key={idx} className="keen-slider__slide">
                  <DishCard
                    type="user"
                    image="/salada.png"
                    title="Salada Ravanello"
                    price="R$ 49,97"
                  />
                </div>
              ))}
            </Slider>
          </CategoryWrapper>
        </Main>
      </Container>
    )
  }