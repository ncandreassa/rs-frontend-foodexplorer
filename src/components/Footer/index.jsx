import { Container, Content } from './styles'
import FooterImg from '../../assets/Footer.svg'

export function Footer() {
    return (
        <Container>
            <Content>
                <img src={FooterImg} alt="Logo" />
                <p>© 2023 - Todos os direitos reservados.</p>
            </Content>
        </Container>
    )
}