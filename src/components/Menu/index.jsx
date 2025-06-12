import { Container, Content, Header, Div, ButtonWrapper } from './styles'
import Close from '../../assets/icons/Close.png'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

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
                <Input
                    icon={FiSearch}
                    placeholder="Busque por pratos ou ingredientes"
                    type="text"
                />
                <ButtonWrapper>
                    <ButtonText title="Sair" underline/>
                </ButtonWrapper>
                
            </Content>
        </Container>
    )
}