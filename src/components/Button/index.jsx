import { Container } from './styles'

export function Button({ title, icon: Icon, disabled = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={disabled}
      $isDisabled={disabled}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}