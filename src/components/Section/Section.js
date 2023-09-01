import { Title, Wrapper } from './Section.styled.js'

const Section = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Section;