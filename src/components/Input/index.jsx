import { Container } from './styles'

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <label>{label}</label>
      <input {...rest} />
    </Container>
  )
}