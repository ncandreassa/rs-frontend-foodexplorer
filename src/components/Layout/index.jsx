import { Header } from '../Header'
import { Footer } from '../Footer'
import { Menu } from '../Menu'
import { useState } from 'react'
import { Container, Main } from './styles'

export function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(prev => !prev)
    return (
        <Container>
            {isMenuOpen ? (
                <Menu onClose={toggleMenu} />
            ) : (
                <Header setIsMenuOpen={toggleMenu} />
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