import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`

export const Header = styled.div`
  width: 100%;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  padding: 56px 24px;
 color: ${({ theme }) => theme.COLORS.LIGHT_100};

`

export const Div = styled.div`
  text-align: center;
  margin-right: 16px;

  > img {
    height: 16px;
  }

`;

export const Content = styled.div`

`