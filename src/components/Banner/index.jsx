import { Container, TextContent } from './styles'
import BannerMobile from '../../assets/Banner.png'
import BannerDesktop from '../../assets/BannerDesktop.png'

export function Banner() {
    return (
        <Container>
            <img src={BannerMobile} alt="Banner mobile" className="mobile" />
            <img src={BannerDesktop} alt="Banner desktop" className="desktop" />
            <TextContent>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </TextContent>
        </Container>
    )
}