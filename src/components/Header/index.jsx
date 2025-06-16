import { useMediaQuery } from 'react-responsive'
import { Container, Div, LogoWrapper, NotificationWrapper, Badge, InputWrapper, Orders } from './styles'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import Logo from '../../assets/Logo.png'
import Menu from '../../assets/icons/Menu.png'
import Receipt from '../../assets/icons/Receipt.svg'
import SignOut from '../../assets/icons/SignOut.svg'

export function MobileHeader({ receiptCount = 0, setIsMenuOpen }) {
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

function DesktopHeader() {

  const userType = "user"

  return (
    <Container>
      <LogoWrapper>
        <img src={Logo} alt="Logo" />
        {userType === 'admin' && <p>admin</p>}
      </LogoWrapper>

      <InputWrapper>
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          marginLeftSvg="100px"
        />
      </InputWrapper>

      <Orders>
        {userType !== "admin" && <img src={Receipt} alt="Receipt" />}
        <span>{userType === "admin" ? "Novo prato" : "Pedidos (0)"}</span>
      </Orders>


      <img src={SignOut} alt="SignOut" />

    </Container>
  )
}

export function Header({ receiptCount = 0, setIsMenuOpen }) {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  const userType = 'user'

  return isDesktop
    ? <DesktopHeader userType={userType} />
    : <MobileHeader userType={userType} receiptCount={receiptCount} setIsMenuOpen={setIsMenuOpen} />
}