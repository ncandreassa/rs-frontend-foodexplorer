import styled from "styled-components";

export const Container = styled.div`
  width: 94%;
  height: 12rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  margin-top: 5.2rem;
  margin-left: 2rem; 
  position: relative;
  border-radius: 0.3rem;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-left: 8rem;
  gap: 2rem;

  > img {
    position: absolute;
    top: -2.9rem;
    left: -2.9rem;
  }

  .desktop {
    display: none;
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    height: 26rem;
    width: 100%;
    margin-top: 13rem;
    margin-left: 0; 

    align-items: center;
    border-radius: 0.8rem;

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }

    > img {
      position: absolute;
      top: -13.9rem;
      left: -7.2rem;
    }
  }

  @media ${({ theme }) => theme.MEDIA.md} {
    margin-left: 0; 
  }
`;

export const TextContent = styled.div`
  width: 20.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin-bottom: 2.2rem;

  > h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  > p {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }

  @media ${({ theme }) => theme.MEDIA.sm} {
    width: 50%;

    > h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    > p {
      font-size: 1.6rem;
      font-weight: 400;
      font-family: "Roboto", serif;
    }
  }
`;
