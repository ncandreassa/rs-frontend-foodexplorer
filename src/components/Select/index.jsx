import { Container, StyledSelect, ChevronIcon } from './styles';

export function Select({ label }) {
    return (
        <Container>
            {label && <label>{label}</label>}
            <StyledSelect defaultValue="">
                <option value="" disabled>Refeição</option>
                <option value="refeicao">Prato Principal</option>
                <option value="lazer">Bebidas</option>
            </StyledSelect>
            <ChevronIcon />
        </Container>
    )
}

