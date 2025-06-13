import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px 42px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 16px;

`

export const Image = styled.img`
  width: 264px;
  height: 264px;
`

export const Info = styled.div`
margin-top: 16px;

  h1 {
    font-size: 27px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 8px;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 10px;
`

export const ControlsButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 48px;
`

