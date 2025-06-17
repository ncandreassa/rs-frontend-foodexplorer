import { Container, StyledSelect, ChevronIcon } from './styles';

export function Select({ label, width }) {
    return (
        <Container $width={width}>
            {label && <label>{label}</label>}
            <StyledSelect defaultValue="">
                <option value="" disabled>Refeição</option>
                <option value="refeicao">Sobremesa</option>
                <option value="lazer">Bebida</option>
            </StyledSelect>
            <ChevronIcon />
        </Container>
    );
}

