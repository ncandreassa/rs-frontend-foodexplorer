import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const TextAreaWrapper = styled.div`
  margin-top: 0.8rem; 
  display: flex;
  align-items: center;

  background: ${({ theme, bg }) => bg || theme.COLORS.DARK_900};
  border-radius: 0.8rem; 
  padding: 1.4rem; 
  height: 17.2rem; 

  > textarea {
    flex: 1;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.6rem; 
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    outline: none;
    width: 100%;
    height: 100%;
  }
`;
