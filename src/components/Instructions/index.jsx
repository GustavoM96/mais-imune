import { Container } from "./styles";

const Instructions = ({ permission }) => {
  return (
    <>
      {permission === 2 ? (
        <Container>
          <h3>Instruções</h3>
          <ol>
            <li>Acesse a página Registro de Vacinação.</li>
            <li>
              No campo busca por paciente, informe o CPF e clique em Buscar.
            </li>
            <li>
              Confirme as informações na tela e então clique em Registrar
              Vacinação.
            </li>
            <li>Selecione a vacina desejada e informe a data da aplicação.</li>
            <li>Clique em confirmar e retorne à página.</li>
          </ol>
        </Container>
      ) : (
        <Container>
          <h3>Instruções</h3>
          <ol>
            <li>
              Para acessar o dashboard de cadastros, acesse a opção Dashboard no
              menu lateral.
            </li>
            <li>
              Para criar novos acessos de profissionais de saúde, clique na
              opção Cadastro de Profissionais de Saúde.
            </li>
            <li>
              Para cadastro de novas vacinas, acessa a opção cadastro de
              vacinas.
            </li>
            <li>
              Para cadastrar novas unidades de saúde, clique na opção Cadastro
              de Estabelecimentos.
            </li>
            <li>
              Para incluir uma vacina a um estabelecimento específico, escolha a
              opção vínculo de vacinas.
            </li>
          </ol>
        </Container>
      )}
    </>
  );
};

export default Instructions;
