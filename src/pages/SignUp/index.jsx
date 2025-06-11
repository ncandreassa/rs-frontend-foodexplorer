import { Container, Form, Div } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Logo from '../../assets/Logo.png'

export function SignUp() {
    return (
        <Container>

            <Div>
                <img src={Logo} alt="Logo" />
            </Div>

            <Form>
                <Input
                    label={"Seu nome"}
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                />

                <Input
                    label={"Email"}
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                />

                <Input
                    label={"Senha"}
                    placeholder="No mínimo 6 caracteres"
                    type="text"
                />

                <Button title="Criar Conta" />

                <Link to="/">Já tenho uma conta</Link>

            </Form>

        </Container>
    )
}