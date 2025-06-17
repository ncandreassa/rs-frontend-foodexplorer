import { Container, StyledLabel, HiddenInput } from './styles'

export function InputFile({ icon: Icon, label, title, id, width, ...rest }) {
    return (
      <Container $width={width}>
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