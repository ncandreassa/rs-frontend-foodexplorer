import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Container, Div, LogoWrapper, NotificationWrapper, Badge, InputWrapper, Orders } from './styles'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import Logo from '../../assets/Logo.png'
import Menu from '../../assets/icons/Menu.png'
import Receipt from '../../assets/icons/Receipt.svg'
import SignOut from '../../assets/icons/SignOut.svg'
import { useAuth } from '../../hooks/auth';

export function MobileHeader({ receiptCount = 0, setIsMenuOpen}) {

  const { user } = useAuth();

  const navigate = useNavigate()

  return (
    <Container>
      <Div>
        <img src={Menu} onClick={setIsMenuOpen} alt="Menu" />
      </Div>

      <Div>
        <LogoWrapper onClick={() => navigate('/')}>
          <img src={Logo} alt="Logo" />
          {user.role === "admin" && <p>admin</p>}
        </LogoWrapper>
      </Div>

      <Div style={{ visibility: user.role === "admin" ? 'hidden' : 'visible' }}>
        <NotificationWrapper>
          <img src={Receipt} alt="Receipt" />
          <Badge>{receiptCount}</Badge>
        </NotificationWrapper>
      </Div>
    </Container>
  )
}

function DesktopHeader({handleSignOut}) {

  const { user } = useAuth();

  const navigate = useNavigate()

  function handleOrdersClick() {
    if (user.role === "admin") {
      navigate("/dish-form/create")
    }
  }

  return (
    <Container>
      <LogoWrapper onClick={() => navigate('/')}>
        <img src={Logo} alt="Logo" />
        {user.role === 'admin' && <p>admin</p>}
      </LogoWrapper>

      <InputWrapper>
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          marginLeftSvg="10rem"
        />
      </InputWrapper>

      <Orders onClick={handleOrdersClick}>
        {user.role !== "admin" && <img src={Receipt} alt="Receipt" />}
        <span>{user.role === "admin" ? "Novo prato" : "Pedidos (0)"}</span>
      </Orders>


      <img src={SignOut} alt="SignOut" onClick={handleSignOut}/>

    </Container>
  )
}

export function Header({ receiptCount = 0, setIsMenuOpen, handleSignOut}) {
  const isDesktop = useMediaQuery({ minWidth: 768 })

  return isDesktop
    ? <DesktopHeader handleSignOut={handleSignOut} />
    : <MobileHeader receiptCount={receiptCount} setIsMenuOpen={setIsMenuOpen} />
}