import { Container, StyledLabel, HiddenInput } from './styles'

export function InputFile({ icon: Icon, label, title, id, ...rest }) {
    return (
        <Container>
            {label && <span>{label}</span>}
            {title && (
                <StyledLabel htmlFor={id}>
                    {Icon && <Icon size={20} />}
                    {title} 
                    <HiddenInput id={id} type="file" {...rest} />
                </StyledLabel>
            )}
        </Container>
    )
}