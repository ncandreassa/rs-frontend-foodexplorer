import { Container, Div } from './styles'
import FooterImg from '../../assets/Footer.svg'

export function Footer() {

    return (
        <Container>
            <Div>
                <img src={FooterImg} alt="Logo" />
                <p>© 2023 - Todos os direitos reservados.</p>
            </Div>
        </Container>
    )

}