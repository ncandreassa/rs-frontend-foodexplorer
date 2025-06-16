import { Container, InputWrapper } from './styles'

export function Input({ icon: Icon, label, bg, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <InputWrapper bg={bg} $marginLeftSvg={rest.marginLeftSvg}>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </InputWrapper>
    </Container>
  )
}