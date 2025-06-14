import { Container, Content, Header, Div, ButtonWrapper } from './styles'
import Close from '../../assets/icons/Close.png'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { useNavigate } from 'react-router-dom'

export function Menu({ onClose }) {

    const navigate = useNavigate()

    const userType = "user"

    function handleNewDish() {
        navigate('/dish-form/create')
        onClose()
      }
    
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
                    {userType === "admin" && (
                        <ButtonText title="Novo prato" underline onClick={handleNewDish}/>
                    )}
                    <ButtonText title="Sair" underline />
                </ButtonWrapper>
                
            </Content>
        </Container>
    )
}