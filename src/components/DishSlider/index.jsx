import { useMediaQuery } from 'react-responsive'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import { DishCard } from '../DishCard'
import { SliderWrapper } from './styles'

export function DishSlider({ title, items }) {
    console.log(`${items.length} lista`)
    const isDesktop = useMediaQuery({ minWidth: 768 })
    const gap = isDesktop ? '2.8rem' : '1.6rem'

    return (
        <SliderWrapper>
            <h1>{title}</h1>

            <div className="slider-container">
                <Splide
                    options={{
                        type: 'slide',
                        perPage: isDesktop ? 4 : 2,
                        perMove: 1,
                        gap,
                        arrows: isDesktop,
                        pagination: isDesktop,
                        autoWidth: true,
                        classes: {
                            arrow: 'splide__arrow custom-arrow',
                            prev: 'splide__arrow--prev',
                            next: 'splide__arrow--next',
                        },
                    }}
                    aria-label={`${title} slider`}
                >
                    {items.map(item => (
                        <SplideSlide key={item.id}>
                            <DishCard dish={item}/>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </SliderWrapper>
    )
}
