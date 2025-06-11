import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;


  > input {
    height: 48px;
    width: 100%;

    margin-top: 8px;

    padding: 16px 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;
    border-radius: 8px;

    font-size: 16px;


    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300} 
    }
  }

  > label {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > svg {
    margin-left: 16px;
  }
`