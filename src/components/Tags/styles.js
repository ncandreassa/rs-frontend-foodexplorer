import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin: 16px 0;

  span {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 8px;
    border-radius: 5px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`