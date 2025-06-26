import { useState } from 'react'
import { Container, LogoWrapper, FormWrapper, Form } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Logo from '../../assets/Logo.png'
import { useAuth } from '../../hooks/auth'
import { Loading } from '../../components/Loading'


export function SignIn() {

  const { signIn, loading, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSignIn() {
    signIn({ email, password })

  }
  
  return (
    <Container>

      {loading && !user ? <Loading /> : <>

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
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              label={"Senha"}
              placeholder="No mínimo 6 caracteres"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />

            <Button title="Entrar" onClick={handleSignIn} />
            <Link to="/register">Criar uma conta</Link>
          </Form>
        </FormWrapper>
      </>
      }



    </Container>
  )
}