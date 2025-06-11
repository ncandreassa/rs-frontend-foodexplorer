import { Container, Form, Div } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Logo from '../../assets/Logo.png'

export function SignIn() {
    return (
        <Container>

            <Div>
                <img src={Logo} alt="Logo" />
            </Div>

            <Form>
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

                <Button title="Entrar" />

                <Link to="/register">Criar conta</Link>

            </Form>

        </Container>
    )
}