import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  .quantity {
    display: flex;
    align-items: center;
    gap: 12px;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
    }

    span {
      font-size: ${({ $fontSize }) => $fontSize};
      font-weight: ${({ $fontWeight }) => $fontWeight};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

`