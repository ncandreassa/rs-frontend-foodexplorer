import { Container, TextContent } from './styles'
import BannerImg from '../../assets/Banner.png'

export function Banner() {
    return (
        <Container>
            <img src={BannerImg} alt="Banner" />
            <TextContent>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </TextContent>
        </Container>
    )
}