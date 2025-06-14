import { Container, Div, LogoWrapper, NotificationWrapper, Badge } from './styles'
import Logo from '../../assets/Logo.png'
import Menu from '../../assets/icons/Menu.png'
import Receipt from '../../assets/icons/Receipt.png'

export function Header({ receiptCount = 0, setIsMenuOpen }) {
  const userType = "user"

  return (
    <Container>
      <Div>
        <img src={Menu} onClick={setIsMenuOpen} alt="Menu" />
      </Div>

      <Div>
        <LogoWrapper>
          <img src={Logo} alt="Logo" />
          {userType === "admin" && <p>admin</p>}
        </LogoWrapper>
      </Div>

      <Div style={{ visibility: userType === "admin" ? 'hidden' : 'visible' }}>
        <NotificationWrapper>
          <img src={Receipt} alt="Receipt" />
          <Badge>{receiptCount}</Badge>
        </NotificationWrapper>
      </Div>
    </Container>
  )
}