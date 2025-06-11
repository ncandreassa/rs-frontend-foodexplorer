import { Container, Content, Header, Div } from './styles'
import Close from '../../assets/icons/Close.png'

export function Menu({ onClose }) {
    return (
        <Container>
            <Header>
                <Div>
                    <img src={Close} alt="Close" onClick={onClose} />
                </Div>
                <p>Menu</p>
            </Header>
            <Content>
                {/* conteúdo do menu */}
            </Content>
        </Container>
    )
}