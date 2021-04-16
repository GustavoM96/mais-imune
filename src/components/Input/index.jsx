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

const Input = ({
  text,
  name,
  error,
  type = "text",
  register,
  options,
  handleChange,
  placeholder,
  children,
}) => {
  return (
    <Container>
      {type === "select" ? (
        <SelectContainer>
          <Text>{text}</Text>
          {register ? (
            <Select name={name} {...register(name)}>
              {options.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          ) : (
            <Select onChange={handleChange} name={name}>
              {children}
              {options.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          )}
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
            placeholder={placeholder}
            {...register(name)}
            error={error}
          />
        </>
      )}
    </Container>
  );
};

export default Input;


