import { Container, InputStyled, Header, Text, ErrorMessage } from "./style";

const Input = ({ text, name, error, type = "text", register }) => {
  return (
    <Container>
      <Header>
        <Text>{text}</Text>
        <ErrorMessage>{error}</ErrorMessage>
      </Header>
      <InputStyled type={type} name={name} {...register(name)} error={error} />
    </Container>
  );
};

export default Input;
