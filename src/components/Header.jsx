import styled from "styled-components";

const Container = styled.div`
  margin-top: 5rem;
  color: #133B5C;
`;

const Header = () => {

  return(
    <Container
      className="text-6xl md:text-8xl font-medium font-festive text-center mx-auto"
    >
      Weather Forecast
    </Container>
  )
};

export default Header;