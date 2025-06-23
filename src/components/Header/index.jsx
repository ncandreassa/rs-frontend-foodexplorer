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
import { useOrders } from '../../hooks/orders';
import { useDishes } from '../../hooks/dishes';

export function MobileHeader({ receiptCount = 0, setIsMenuOpen }) {

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

function DesktopHeader({ handleSignOut, receiptCount = 0, handleSearch }) {

  const { user } = useAuth();

  const { query } = useDishes();

  const navigate = useNavigate()

  const { clearOrders } = useOrders();

  function handleOrdersClick() {
    if (user.role === "admin") {
      navigate("/dish-form/create")
    }
  }

  function handleSignOutWithCleanup() {
    clearOrders();
    handleSignOut();
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
          type="search"
          marginLeftSvg="10rem"
          onChange={(e) => handleSearch(e.target.value)}
          value={query}
        />
      </InputWrapper>

      <Orders onClick={handleOrdersClick}>
        {user.role !== "admin" && <img src={Receipt} alt="Receipt" />}
        <span>{user.role === "admin" ? "Novo prato" : `Pedidos (${receiptCount})`}</span>
      </Orders>


      <img src={SignOut} alt="SignOut" onClick={handleSignOutWithCleanup} />

    </Container>
  )
}

export function Header({ setIsMenuOpen, handleSignOut, handleSearch }) {
  const isDesktop = useMediaQuery({ minWidth: 768 })

  const { getTotalQuantity } = useOrders();
  const totalQuantity = getTotalQuantity();


  return isDesktop
    ? <DesktopHeader handleSignOut={handleSignOut} receiptCount={totalQuantity} handleSearch={handleSearch} />
    : <MobileHeader receiptCount={totalQuantity} setIsMenuOpen={setIsMenuOpen} />
}