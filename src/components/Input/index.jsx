import {
  Container,
  InputStyled,
  Header,
  Text,
  ErrorMessage,
  SelectContainer,
  Select,
  CheckBoxContainer,
} from "./style";

const Input = ({ text, name, error, type = "text", register, options }) => {
  return (
    <Container>
      {type === "select" ? (
        <SelectContainer>
          <Text>{text}</Text>
          <Select name={name} {...register(name)}>
            {options.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </Select>
        </SelectContainer>
      ) : type === "checkbox" ? (
        <CheckBoxContainer>
          <Text>{text}</Text>
          <InputStyled type={type} name={name} {...register(name)} />
        </CheckBoxContainer>
      ) : (
        <>
          <Header>
            <Text>{text}</Text>
            <ErrorMessage>{error}</ErrorMessage>
          </Header>
          <InputStyled
            type={type}
            name={name}
            {...register(name)}
            error={error}
          />
        </>
      )}
    </Container>
  );
};

export default Input;
