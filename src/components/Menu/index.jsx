import { Container, Content, Header, Div, ButtonWrapper } from './styles'
import Close from '../../assets/icons/Close.png'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';
import { useOrders } from '../../hooks/orders';
import { useDishes } from '../../hooks/dishes';

export function Menu({ onClose, handleSignOut, handleSearch }) {
    const { user } = useAuth();

    const navigate = useNavigate()

    const { clearOrders } = useOrders();

    const { query } = useDishes();


    function handleNewDish() {
        navigate('/dish-form/create')
        onClose()
    }


    function handleSignOutWithCleanup() {
        clearOrders();
        handleSignOut();
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
                    type="search"
                    onChange={(e) => handleSearch(e.target.value)}
                    value={query}
                />
                <ButtonWrapper>
                    {user.role === "admin" && (
                        <ButtonText title="Novo prato" underline onClick={handleNewDish} />
                    )}
                    <ButtonText title="Sair" underline onClick={handleSignOutWithCleanup} />
                </ButtonWrapper>

            </Content>
        </Container>
    )
}