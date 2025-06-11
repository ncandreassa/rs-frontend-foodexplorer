import { Container, Div, NotificationWrapper, Badge } from './styles'
import Logo from '../../assets/Logo.png'
import Menu from '../../assets/icons/Menu.png'
import Receipt from '../../assets/icons/Receipt.png'

export function Header({ receiptCount = 0 }) {
    return (
        <Container>

            <Div>
                <img src={Menu} alt="Menu" />
            </Div>

            <Div>
                <img src={Logo} alt="Logo" />
            </Div>

            <Div>
                <NotificationWrapper>
                    <img src={Receipt} alt="Receipt" />
                    <Badge>{receiptCount}</Badge>
                </NotificationWrapper>
            </Div>


        </Container>
    )
}