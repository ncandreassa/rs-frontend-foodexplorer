import styled from "styled-components";

export const SliderWrapper = styled.div`
  margin-top: 2.4rem;
  position: relative;

  > h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 1.6rem;

    @media ${({ theme }) => theme.MEDIA.sm} {
      font-size: 3.2rem;
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
    width: 3.2rem;
    height: 3.2rem;
    font-size: 2rem;
    transition: opacity 0.3s;
  }

  .splide__arrow svg {
    fill: white;
    width: 2.4rem;
    height: 2.4rem;
  }

  .splide__arrow--prev {
    left: -3rem;
  }

  .splide__arrow--next {
    right: -3rem;
  }

  .splide__pagination {
    margin-top: 2.4rem;
    position: relative;
    z-index: 5;
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    .splide__arrow,
    .splide__pagination {
      display: none !important;
    }
  }
`;
