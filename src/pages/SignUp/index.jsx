import { Container, LogoWrapper, FormWrapper, Form } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Logo from '../../assets/Logo.png'

export function SignUp() {
  return (
    <Container>
      <LogoWrapper>
        <img src={Logo} alt="Logo" />
      </LogoWrapper>

      <FormWrapper>
        <h1>Crie sua conta</h1>

        <Form>
          <Input
            label="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
          />

          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />

          <Input
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
          />

          <Button title="Criar Conta" />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </FormWrapper>
    </Container>
  )
}