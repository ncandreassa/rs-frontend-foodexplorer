import styled from "styled-components";

export const Container = styled.div`
  width: ${({ $width }) => $width || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > span {
    font-size: 1.6rem; 
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", serif;
    font-weight: 400;
  }
`;

export const StyledLabel = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem; 

  display: inline-flex;
  align-items: center;
  margin-top: 0.8rem; 
  gap: 0.8rem; 
  background: ${({ theme }) => theme.COLORS.DARK_800};
  height: 4.8rem; 
  color: white;
  padding: 0.8rem 3.2rem; 
  border-radius: 0.8rem;
  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    flex-shrink: 0;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
