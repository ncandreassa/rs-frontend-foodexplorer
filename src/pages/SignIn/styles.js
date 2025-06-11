import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 158px 48px;
  

`
export const Div = styled.div`
  width: 100%;
  margin-bottom: 74px;
  text-align: center;

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > a {
    margin-top: 32px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

