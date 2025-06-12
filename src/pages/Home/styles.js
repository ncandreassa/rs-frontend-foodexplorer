import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Main = styled.main`
  padding: 16px;
`

export const BannerWrapper = styled.div`
  margin-bottom: 62px;
`

export const CategoryWrapper = styled.div`
margin-top: 24px;

  > h1 {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const Slider = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;

  .keen-slider__slide {
    min-width: 210px;
  }
`