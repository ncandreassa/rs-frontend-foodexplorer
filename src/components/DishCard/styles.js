import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  padding: 16px;
  width: 210px;
  height: 292px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  justify-content: ${({ $isUser }) => ($isUser ? 'flex-start' : 'center')};
`

export const Icon = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
`

export const Image = styled.img`
  width: 88px;
  height: 88px;
`

export const Title = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;
`

export const Price = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.CAKE_200};
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 16px;
    cursor: pointer;
  }
`

export const Quantity = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`