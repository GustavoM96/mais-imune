
import api from '../../services/api'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from '../Button'
import Input from '../Input'

import { Container, Title, Form, ButtonContainer } from '../FormCreateVaccine/style'

const FormRegisterEmployee = () => {
    const token = JSON.parse(localStorage.getItem('token'))

    const headers = { headers: { Authorization: `Bearer ${token}` } };

    const schema = yup.object().shape({
        name: yup
            .string("Campo deve ser preenchido com texto")
            .required("Campo obrigatório"),
        email: yup
            .string("Campo deve ser preenchido com texto")
            .email("Deve ser preenchido um e-mail")
            .required("Campo obrigatório"),
        cpf: yup
            .string("")
            .matches(/^(\d{3}.){2}\d{3}-\d{2}$/, 'CPF inválido')
            .required("Campo obrigatório")
      });

    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm({ resolver: yupResolver(schema) });

    const handleData = (data) => {
        const newData = {...data, permission: 2, vaccines: []}
        api.post('/users', newData, headers)
            .catch(error => console.log(error))
    }
    return (
        <Container>
            <Title>Cadastro de profissionais de saúde</Title>
            <Form onSubmit={handleSubmit(handleData)}>
                <Input name='name' text='Nome Completo' error={errors.name?.message} register={register} />
                <Input name='email' text='Email' type='email' error={errors.email?.message} register={register} />
                <Input name='cpf' text='CPF' error={errors.cpf?.message} register={register} />
                <Input name='password' type='password' text='Senha' error={errors.password?.message} register={register} />
                <ButtonContainer>
                    <Button text='Cadastrar' type='submit' marginTop='20' />
                </ButtonContainer>
            </Form>
        </Container>
    )
}

export default FormRegisterEmployee
