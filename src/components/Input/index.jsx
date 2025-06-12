import { Container, InputWrapper } from './styles'

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <InputWrapper>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </InputWrapper>
    </Container>
  )
}