import { Header } from '../Header'
import { Footer } from '../Footer'
import { Menu } from '../Menu'
import { useState } from 'react'
import { Container, Main } from './styles'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useDishes } from '../../hooks/dishes'

export function Layout({ children }) {
    const { signOut } = useAuth();

    const { setQuery } = useDishes();

    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    function handleSearch(text) {
        setQuery(text)
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(prev => !prev)
    return (
        <Container>
            {isMenuOpen ? (
                <Menu onClose={toggleMenu} handleSignOut={handleSignOut} handleSearch={handleSearch} />
            ) : (
                <Header setIsMenuOpen={toggleMenu} handleSignOut={handleSignOut} handleSearch={handleSearch} />
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