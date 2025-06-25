import { useMediaQuery } from 'react-responsive'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import { DishCard } from '../DishCard'
import { SliderWrapper } from './styles'

export function DishSlider({ title, items }) {
    const isDesktop = useMediaQuery({ minWidth: 1024 })
    const gap = isDesktop ? '2.4rem' : '1.4rem'

    return (
        <SliderWrapper>
            <h1>{title}</h1>

            <div className="slider-container">
                <Splide
                    options={{
                        type: 'slide',
                        perPage: 4,
                        breakpoints: {
                            768: {
                                perPage: 1,
                            },
                            1024: {
                                perPage: 2,
                            },
                            1440: {
                                perPage: 3,
                            }
                        },
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
                            <DishCard dish={item} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </SliderWrapper>
    )
}
