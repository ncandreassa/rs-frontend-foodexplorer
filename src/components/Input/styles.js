import styled from "styled-components";

export const Container = styled.div`
  width: ${({ $width }) => $width || "100%"};

  > label {
    font-size: 1.6rem; 
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const InputWrapper = styled.div`
  margin-top: 0.8rem; 
  display: flex;
  align-items: center;

  background: ${({ theme, bg }) => bg || theme.COLORS.DARK_900};
  border-radius: 0.8rem; 
  padding: 0 1.4rem; 
  height: 4.8rem; 

  > svg {
    margin-right: 1.2rem; 
    margin-left: ${({ $marginLeftSvg = "0" }) => $marginLeftSvg};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    flex-shrink: 0;
  }

  > input {
    flex: 1;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    outline: none;
  }

`;
