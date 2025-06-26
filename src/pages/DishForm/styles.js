import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.MEDIA.md} {
    padding: 4rem 12.2rem;
  }
`;

export const Form = styled.form`
  margin: 1.2rem 3.2rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 400;
    margin-bottom: 2.4rem;
    width: 100%;
  }

  @media ${({ theme }) => theme.MEDIA.md} {
    margin: 2rem auto;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2.4rem;
    justify-content: space-between;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3.2rem;

  @media ${({ theme }) => theme.MEDIA.md} {
    width: 100%;
    justify-content: flex-end;
  }
`;
