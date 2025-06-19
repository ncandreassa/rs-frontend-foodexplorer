import { Header } from '../Header'
import { Footer } from '../Footer'
import { Menu } from '../Menu'
import { useState } from 'react'
import { Container, Main } from './styles'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

export function Layout({ children }) {
    const { signOut, user } = useAuth();

    const navigation = useNavigate();
  
    function handleSignOut() {
      navigation("/");
      signOut();
    }
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(prev => !prev)
    return (
        <Container>
            {isMenuOpen ? (
                <Menu onClose={toggleMenu} handleSignOut={handleSignOut}/>
            ) : (
                <Header setIsMenuOpen={toggleMenu} handleSignOut={handleSignOut} />
            )}

            {!isMenuOpen && (
                <Main>
                    {children}
                </Main>
            )}

            <Footer />
        </Container>
    )
}