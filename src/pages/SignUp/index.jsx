import { useState } from 'react'
import { Container, LogoWrapper, FormWrapper, Form } from './styles'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Logo from '../../assets/Logo.png'

export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    if(password.length < 6) {
      return alert("Sua senha deve conter no mínimo 6 caracteres");
    }

    api.post("/users", { name, email, password }).then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/")
    })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar");
        }
      })
  }

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
            onChange={e => setName(e.target.value)}
          />

          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />

          <Button title="Criar Conta" onClick={handleSignUp} />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </FormWrapper>
    </Container>
  )
}