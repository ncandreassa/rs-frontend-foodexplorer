import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  justify-content: center;
  margin: 1.6rem 0;

  span {
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 0.8rem;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    justify-content: flex-start;
  }
`;
