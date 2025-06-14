import { Container, LogoWrapper, FormWrapper, Form } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Logo from '../../assets/Logo.png'

export function SignIn() {
  return (
    <Container>

      <LogoWrapper>
        <img src={Logo} alt="Logo" />
      </LogoWrapper>

      <FormWrapper>
        <h1>Faça login</h1>

        <Form>
          <Input
            label={"Email"}
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />

          <Input
            label={"Senha"}
            placeholder="No mínimo 6 caracteres"
            type="password"
          />

          <Button title="Entrar" />
          <Link to="/register">Criar uma conta</Link>
        </Form>
      </FormWrapper>

    </Container>
  )
}