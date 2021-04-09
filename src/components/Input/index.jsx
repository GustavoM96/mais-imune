import { Container, InputStyled, Header, Text, ErrorMessage } from "./style";

import { useState } from "react";

const Input = ({
  text,
  name,
  reference,
  error,
  type = "text",
  register,
  errors,
  setError,
}) => {
  //   const [input, setInput] = useState("");

  //   const handleInput = (evt) => {
  //     const inputValue = evt.target.value;
  //     console.log(inputValue);
  //     setInput(inputValue);
  //   };

  return (
    <Container>
      <Header>
        <Text>{text}</Text>
        <ErrorMessage>{error}</ErrorMessage>
      </Header>
      <InputStyled
        type={type}
        name={name}
        // value={input}
        // onChange={handleInput}
        {...register(name)}
        error={error}
      />
    </Container>
  );
};

export default Input;
