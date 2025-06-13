import { Container } from './styles'

export function Button({
  title,
  icon: Icon,
  image,
  disabled = false,
  ...rest
}) {
  return (
    <Container
      type="button"
      disabled={disabled}
      $isDisabled={disabled}
      {...rest}
    >
      {image && <img src={image} alt="ícone do botão" className="button-image" />}
      {!image && Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}