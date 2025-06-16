import styled from 'styled-components'

export const SliderWrapper = styled.div`
  margin-top: 24px;
  position: relative;

  > h1 {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  .slider-container {
    position: relative;
  }

  .splide__slide {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .custom-arrow {
    background: transparent;
    border: none;
    color: white;
    width: 32px;
    height: 32px;
    font-size: 20px;
    transition: opacity 0.3s;
  }

  .splide__arrow svg {
    fill: white;
    width: 24px;
    height: 24px;
  }

  .splide__arrow--prev {
    left: -3rem;
  }

  .splide__arrow--next {
    right: -3rem;
  }

  .splide__pagination {
    margin-top: 24px;
    position: relative;
    z-index: 5;
  }

  @media (max-width: 767px) {
    .splide__arrow,
    .splide__pagination {
      display: none !important;
    }
  }
`
