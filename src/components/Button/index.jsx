import { Container } from './styles'

export function Button({
  title,
  icon: Icon,
  image,
  background,
  ...rest
}) {
  return (
    <Container
      type="button"
      background={background}

      {...rest}
    >
      {image && <img src={image} alt="ícone do botão" className="button-image" />}
      {!image && Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}