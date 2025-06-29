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
    overflow: visible; 
  }

  .splide__slide {
    opacity: 1;
    padding: 1rem;
    transition: transform 0.2s ease, border 0.2s ease;

    &:hover {
      transform: scale(1.03);
    }
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
    left: -6rem;
  }

  .splide__arrow--next {
    right: -6rem;
  }

  .splide__pagination {
    margin-top: 2.4rem;
    position: relative;
    z-index: 5;
  }
`;
