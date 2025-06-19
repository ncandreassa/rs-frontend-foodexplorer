import { Container, StyledSelect, ChevronIcon } from './styles';

export function Select({ label, width, value = "Refeição", onChange }) {
    return (
        <Container $width={width}>
            {label && <label>{label}</label>}
            <StyledSelect value={value} onChange={onChange}>
                <option value="Refeição">Refeição</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Bebida">Bebida</option>
            </StyledSelect>
            <ChevronIcon />
        </Container>
    );
}

