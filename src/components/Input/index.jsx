import { Container, InputWrapper } from './styles'

export function Input({ icon: Icon, label, bg, width, ...rest }) {
  return (
    <Container $width={width}>
      {label && <label>{label}</label>}
      <InputWrapper bg={bg} $marginLeftSvg={rest.marginLeftSvg}>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </InputWrapper>
    </Container>
  )
}