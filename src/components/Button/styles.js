import styled from 'styled-components'

export const Container = styled.button`
  width: ${({ $width = '100%' }) => $width};
  height: ${({ $height = '48px' }) => $height};
  font-size: ${({ $fontSize = '14px' }) => $fontSize};
  margin-top: ${({ $marginTop = '16px' }) => $marginTop};

  background-color: ${({ theme, background }) =>
    background || theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: 0;
  padding: 0 16px;
  border-radius: 5px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  .button-image {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`